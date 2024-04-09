import json
import pandas as pd
import folium

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
csv_filename = 'process_gps_data.csv'
df.to_csv(csv_filename, index=False)

print(f"GPS data has been saved to {csv_filename}")
# Calculate the mean of the latitude and longitude for setting the initial map center
map_center = [df['latitude'].mean(), df['longitude'].mean()]

# Create a map centered around the mean latitude and longitude
m = folium.Map(location=map_center, zoom_start=13)

# Add markers for each GPS point
for index, row in df.iterrows():
    folium.Marker([row['latitude'], row['longitude']]).add_to(m)

# Save the map to an HTML file
map_filename = 'gps_data_map.html'
m.save(map_filename)

print(f"Map with GPS data has been saved to {map_filename}")