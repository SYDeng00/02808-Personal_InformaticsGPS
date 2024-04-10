from geopy.distance import geodesic
import pandas as pd


df = pd.read_csv('/Users/dan/DTU_PROJECT/02808 Personal/02808/docs/data/2022/combined_data.csv')


df['start_timestamp'] = pd.to_datetime(df['start_timestamp'], format='ISO8601')
df['date'] = df['start_timestamp'].dt.date  


df.sort_values(by='date', inplace=True)

def is_new_place(place, existing_places, threshold=50):
    """
    Determine if a place is within 'threshold' meters of any place in 'existing_places'.
    Returns True if the place is new, False otherwise.
    """
    for _, existing_place in existing_places.iterrows():
        distance = geodesic(
            (place['latitude'], place['longitude']),
            (existing_place['latitude'], existing_place['longitude'])
        ).meters
        if distance <= threshold:
            return False
    return True


all_new_places = []

# separate by each day
for date, current_day_data in df.groupby('date'):

    if date == df['date'].min():
        all_new_places.extend(current_day_data.to_dict('records'))
    else:
        previous_data = pd.DataFrame(all_new_places)
        new_places_today = []
        for _, place in current_day_data.iterrows():
            if is_new_place(place, previous_data):
                new_places_today.append(place)
                all_new_places.append(place.to_dict())

new_places_df = pd.DataFrame(all_new_places)

new_places_df.to_csv('new_places.csv', index=False)

print(f"Total new places visited: {len(new_places_df)}")
