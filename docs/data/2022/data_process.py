import json
import pandas as pd
import os


combined_df = pd.DataFrame()


folder_path = '/Users/dan/DTU_PROJECT/02808 Personal/02808/docs/data/2022'  


for filename in os.listdir(folder_path):
    if filename.endswith('.json'):  # 确保只处理 JSON 文件
        file_path = os.path.join(folder_path, filename)
        

        with open(file_path, 'r') as file:
            data = json.load(file)


        gps_data = []
        for item in data.get('timelineObjects', []):
            if 'placeVisit' in item:
                location = item['placeVisit']['location']
                latitude = location['latitudeE7'] / 1e7  
                longitude = location['longitudeE7'] / 1e7  
                start_timestamp = item['placeVisit']['duration']['startTimestamp']
                end_timestamp = item['placeVisit']['duration']['endTimestamp']
                gps_data.append({
                    'latitude': latitude,
                    'longitude': longitude,
                    'start_timestamp': start_timestamp,
                    'end_timestamp': end_timestamp
                })


        df = pd.DataFrame(gps_data)
        

        combined_df = pd.concat([combined_df, df], ignore_index=True)


combined_df.reset_index(drop=True, inplace=True)


print(combined_df)


combined_df.to_csv('combined_data.csv', index=False)
