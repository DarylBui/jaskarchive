import sys
import csv
import downloader

def main():
    translation_table = str.maketrans("", "","/\:?<>*.")
    queries = []
    with open('data.csv', 'r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            album = row[1]
            artist = row[2]
            query = album + " " + artist
            queries.append(query)

    for query in queries:
        search_query = query.translate(translation_table)
        downloader.download(search_query, limit=1, output_dir='covers', adult_filter_off=False)
        
 
if __name__ == "__main__":
    main()