import os
import django
import csv

# --- Setup Django environment ---
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")  
django.setup()

# --- Import your model ---
from api.models import Registration   # change app_name & model

# --- Export logic ---
def export_to_csv():
    # Get all field names dynamically
    field_names = [field.name for field in Registration._meta.fields]

    with open("registrations.csv", "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(field_names)  # write headers

        for obj in Registration.objects.all():
            row = [getattr(obj, field) for field in field_names]
            writer.writerow(row)

    print("✅ Export completed! File saved as registrations.csv")
if __name__ == "__main__":
    export_to_csv()
