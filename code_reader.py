import os

# Lists to exclude specific folders and files
EXCLUDE_FOLDERS = ["node_modules", "venv", "__pycache__","dataset"]
EXCLUDE_FILES = [
    "README.md", "config.json","code_reader.py",
    ".gitignore",".git","bbc_data.csv"]

def save_file_contents(folder_path, output_file):
    with open(output_file, 'w', encoding='utf-8') as out_f:
        for root, dirs, files in os.walk(folder_path):
            # Exclude specific folders
            dirs[:] = [d for d in dirs if d not in EXCLUDE_FOLDERS]

            for file in files:
                # Skip files in the exclusion list
                if file in EXCLUDE_FILES:
                    out_f.write(f"\n[Skipped] Excluded file: {os.path.join(root, file)}\n")
                    continue
                
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as in_f:
                        content = in_f.read()
                        out_f.write(f"\n\n======= Contents of {file_path} =======\n\n")
                        out_f.write(content + "\n")
                except UnicodeDecodeError:
                    out_f.write(f"\n[Skipped] Binary or non-UTF-8 file: {file_path}\n")
                except PermissionError:
                    out_f.write(f"\n[Denied] Permission error for: {file_path}\n")
                except Exception as e:
                    out_f.write(f"\n[Error] Failed to read {file_path}: {str(e)}\n")

if __name__ == "__main__":
    folder_path = input("Enter the folder path to scan: ").strip()
    output_file = input("Enter output file name (default: output.txt): ").strip() or "output.txt"

    if not os.path.exists(folder_path):
        print("Error: The specified path does not exist.")
    elif not os.path.isdir(folder_path):
        print("Error: The specified path is not a directory.")
    else:
        try:
            save_file_contents(folder_path, output_file)
            print(f"Successfully saved file contents to {output_file}")
        except Exception as e:
            print(f"Failed to create output file: {str(e)}")