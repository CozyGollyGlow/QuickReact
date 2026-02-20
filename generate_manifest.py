import os
import json

# Folder containing your images
IMAGES_FOLDER = "images"

# Output JSON file
OUTPUT_FILE = os.path.join(IMAGES_FOLDER, "images.json")

# Allowed image extensions
VALID_EXTENSIONS = (".png", ".jpg", ".jpeg", ".gif", ".webp")

def generate_manifest():
    images = []

    for file in os.listdir(IMAGES_FOLDER):
        if file.lower().endswith(VALID_EXTENSIONS):
            images.append(f"{IMAGES_FOLDER}/{file}")

    images.sort()

    with open(OUTPUT_FILE, "w") as f:
        json.dump(images, f, indent=2)

    print(f"Generated {OUTPUT_FILE} with {len(images)} images.")

if __name__ == "__main__":
    generate_manifest()