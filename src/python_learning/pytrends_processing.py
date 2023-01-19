from pytrends.request import TrendReq

pytrends = TrendReq(hl='en-US', tz=360)

kw_list = ["Blockchain"]
pytrends.build_payload(kw_list, cat=0, timeframe='today 5-y', geo='', gprop='')

df = pytrends.interest_over_time()
df.head()

# Path: src\pytrends_processing.py
import matplotlib.pyplot as plt

plt.plot(df.index, df['Blockchain'])
plt.savefig('data/blockchain.png')
plt.show()

# Save the data to a CSV file
df.to_csv("data/blockchain.csv")
