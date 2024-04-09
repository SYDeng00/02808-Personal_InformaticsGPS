import json
import pandas as pd
import sys

# Load JSON data
with open('2023_JUNE.json', 'r') as file:
    data = json.load(file)

# Extract GPS data
gps_data = []
for item in data['timelineObjects']:
    if 'placeVisit' in item:
        location = item['placeVisit']['location']
        latitude = location['latitudeE7'] / 1e7  # Convert from E7 format
        longitude = location['longitudeE7'] / 1e7  # Convert from E7 format
        start_timestamp = item['placeVisit']['duration']['startTimestamp']
        end_timestamp = item['placeVisit']['duration']['endTimestamp']
        gps_data.append({
            'latitude': latitude,
            'longitude': longitude,
            'start_timestamp': start_timestamp,
            'end_timestamp': end_timestamp
        })

# Convert list of dicts into a DataFrame
df = pd.DataFrame(gps_data)

# Display the DataFrame
print(df)

# Save the DataFrame to a CSV file
# csv_filename = 'gps_data.csv'
# df.to_csv('gps_data.csv', index=False)
# Print the DataFrame to CSV format directly to standard output
df.to_csv(sys.stdout, index=False)
