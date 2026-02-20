import os
import re
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT

def parse_skill_md(file_path):
    """
    Parses a SKILL.md file to extract name and description from YAML frontmatter.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find YAML frontmatter
        match = re.search(r'^---\s+(.*?)\s+---', content, re.DOTALL)
        if match:
            frontmatter = match.group(1)
            
            # Simple parsing of name and description
            name_match = re.search(r'^name:\s*(.+)$', frontmatter, re.MULTILINE)
            desc_match = re.search(r'^description:\s*(.+)$', frontmatter, re.MULTILINE)
            
            name = name_match.group(1).strip() if name_match else "Unknown Name"
            
            # Handle multi-line descriptions if necessary (basic implementation)
            description = desc_match.group(1).strip() if desc_match else "No description provided"
            
            return name, description
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None, None
    return None, None

def generate_pdf(skills_dir, output_file):
    doc = SimpleDocTemplate(output_file, pagesize=letter,
                            rightMargin=72, leftMargin=72,
                            topMargin=72, bottomMargin=18)
    
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='Justify', alignment=TA_JUSTIFY))
    
    # Title Style
    title_style = styles['Title']
    
    # Skill Name Style
    name_style = ParagraphStyle(
        'SkillName',
        parent=styles['Heading2'],
        spaceAfter=6,
        textColor='black'
    )
    
    # Description Style
    desc_style = ParagraphStyle(
        'SkillDesc',
        parent=styles['Normal'],
        spaceAfter=12
    )
    
    story = []
    
    # Title
    story.append(Paragraph("Installed Skills Report", title_style))
    story.append(Spacer(1, 12))
    story.append(Paragraph(f"Generated for: {skills_dir}", styles['Normal']))
    story.append(Spacer(1, 24))
    
    skills_found = []
    
    # Walk through the directory
    for root, dirs, files in os.walk(skills_dir):
        if 'SKILL.md' in files:
            skill_path = os.path.join(root, 'SKILL.md')
            name, description = parse_skill_md(skill_path)
            
            if name and name != "Unknown Name":
                skills_found.append((name, description))
    
    # Sort skills by name
    skills_found.sort(key=lambda x: x[0].lower())
    
    if not skills_found:
        story.append(Paragraph("No skills found.", styles['Normal']))
    else:
        for name, description in skills_found:
            story.append(Paragraph(f"Skill: {name}", name_style))
            story.append(Paragraph(description, desc_style))
            story.append(Spacer(1, 12)) 
            # Add a separator line could be nice, but simple spacer is enough
            
    try:
        doc.build(story)
        print(f"PDF generated successfully at: {output_file}")
        print(f"Total skills found: {len(skills_found)}")
    except Exception as e:
        print(f"Error generating PDF: {e}")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    output_pdf = os.path.join(current_dir, "skills_report.pdf")
    
    print("Starting PDF generation...")
    generate_pdf(current_dir, output_pdf)
