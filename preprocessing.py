import pandas as pd 
import json

csv_file_path = "./rawData/roadkillData.csv"

df = pd.read_csv(csv_file_path)

latitude = df["decimalLatitude"]
longitude = df["decimalLongitude"]

buffer_radius = 1

point_groups = []

for i, j in zip(latitude, longitude):
    min_latitude = i - buffer_radius
    max_latitude = i + buffer_radius
    min_longitude = j - buffer_radius
    max_longitude = j + buffer_radius

    point_group = {
        "bottom_left": {"latitude": min_latitude, "longitude": min_longitude},
        "top_right": {"latitude": max_latitude, "longitude": max_longitude}
    }

    point_groups.append(point_group)

json_file_path = "range_point_groups.json"

with open(json_file_path, "w") as json_file:
    json.dump(point_groups, json_file, indent=4)
