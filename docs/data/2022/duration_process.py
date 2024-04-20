import pandas as pd
from pyproj import Proj, transform

# Define a function to convert latitude and longitude to UTM coordinates
def latlon_to_utm(lat, lon):
    proj_utm = Proj(proj='utm', zone=32, ellps='WGS84', preserve_units=False)
    x, y = proj_utm(lon, lat)
    return x, y

# Read data from a CSV file
df = pd.read_csv('docs/data/combined_data_durations.csv')

# Convert latitude and longitude to UTM coordinates and round to the nearest 50 meters
df['utm_x'], df['utm_y'] = zip(*df.apply(lambda row: latlon_to_utm(row['Latitude'], row['Longitude']), axis=1))
df['utm_x_rounded'] = (df['utm_x'] / 50).round() * 50
df['utm_y_rounded'] = (df['utm_y'] / 50).round() * 50

# Assume 'duration' is a column in your DataFrame that contains the duration of each visit in seconds
# Group by UTM coordinates and calculate the total duration for each grid
duration_sums = df.groupby(['utm_x_rounded', 'utm_y_rounded'])['duration'].sum().reset_index(name='total_duration')

# Merge the original data with the total duration
result_df = pd.merge(df, duration_sums, on=['utm_x_rounded', 'utm_y_rounded'])

# Remove duplicate locations, keeping only the first occurrence
result_df = result_df.drop_duplicates(subset=['utm_x_rounded', 'utm_y_rounded'])

# Sort the DataFrame by total duration in descending order
result_df = result_df.sort_values(by='total_duration', ascending=False)

# Save the top 10 processed data entries to a CSV file
result_df.head(10).to_csv('processed_duration.csv', index=False)
