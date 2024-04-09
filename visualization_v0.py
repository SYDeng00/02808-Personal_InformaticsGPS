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
csv_filename = 'gps_data.csv'
df.to_csv(csv_filename, index=False)

print(f"GPS data has been saved to {csv_filename}")

# Create a map centered around the average location
m = folium.Map(location=[df['latitude'].mean(), df['longitude'].mean()], zoom_start=13)
# Add points for each location in the DataFrame
for _, row in df.iterrows():
    folium.Marker(
        location=[row['latitude'], row['longitude']],
        popup=f"Start: {row['start_timestamp']}, End: {row['end_timestamp']}",
        icon=folium.Icon(color='blue')
    ).add_to(m)

# Display the map
m