import os
import json
import re

def get_title(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        match = re.search(r'---TITLE---\s*(.*)', content)
        title = match.group(1).strip() if match else os.path.basename(file_path).replace('.md', '')
    
    file_name = os.path.basename(file_path)
    file_prefix = file_name.split('-', 2)[:2]
    file_prefix = '-'.join(file_prefix)
    
    return f"{file_prefix} {title}"

def process_directory(dir_path):
    category_name = os.path.basename(dir_path)
    category_name = category_name.replace('-', ' ').title()
    category = {
        "name": category_name,
        "questions": []
    }

    for file in sorted(os.listdir(dir_path)):
        if file.endswith('.md'):
            file_path = os.path.join(dir_path, file)
            title = get_title(file_path)
            url = os.path.relpath(file_path, 'questions').replace('\\', '/')
            category["questions"].append({"title": title, "url": url})

    return category

def generate_manifest():
    questions_dir = 'questions'
    categories = []

    for dir_name in sorted(os.listdir(questions_dir)):
        full_path = os.path.join(questions_dir, dir_name)
        if os.path.isdir(full_path):
            categories.append(process_directory(full_path))

    manifest = {"categories": categories}
    with open('questions/manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)

    print('Manifest generated successfully.')

generate_manifest()