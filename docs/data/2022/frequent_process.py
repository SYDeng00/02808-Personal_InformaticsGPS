import pandas as pd
from pyproj import Proj, transform

# Define a function to convert latitude and longitude to UTM coordinates
def latlon_to_utm(lat, lon):
    proj_utm = Proj(proj='utm', zone=32, ellps='WGS84', preserve_units=False)
    x, y = proj_utm(lon, lat)
    return x, y

# Read data from a CSV file
df = pd.read_csv('/Users/dan/DTU_PROJECT/02808 Personal/02808/docs/data/2022/combined_data.csv')

# Convert latitude and longitude to UTM coordinates and round to the nearest 50 meters
df['utm_x'], df['utm_y'] = zip(*df.apply(lambda row: latlon_to_utm(row['latitude'], row['longitude']), axis=1))
df['utm_x_rounded'] = (df['utm_x'] / 50).round() * 50
df['utm_y_rounded'] = (df['utm_y'] / 50).round() * 50

# Group by UTM coordinates and calculate the number of visits for each grid
location_counts = df.groupby(['utm_x_rounded', 'utm_y_rounded']).size().reset_index(name='visit_counts')

# Merge the original data with the visit counts
result_df = pd.merge(df, location_counts, on=['utm_x_rounded', 'utm_y_rounded'])

# Remove duplicate locations, keeping only the first occurrence
result_df = result_df.drop_duplicates(subset=['utm_x_rounded', 'utm_y_rounded'])

# Sort the DataFrame by visit counts in descending order
result_df = result_df.sort_values(by='visit_counts', ascending=False)

# # Save the processed data to a CSV file
# result_df.to_csv('processed_locations.csv', index=False)

# Save the top 10 processed data entries to a CSV file
result_df.head(10).to_csv('processed_locations.csv', index=False)
