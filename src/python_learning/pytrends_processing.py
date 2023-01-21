import pandas as pd
import matplotlib.pyplot as plt

from pytrends.request import TrendReq
from typing import List, Dict


class PyTrendsProcessing:
    # Docs here:
    def __init__(self, timeframe: str = "today 5-y"):
        self.pytrends = TrendReq(hl='en-US', tz=360)
        self.timeframe = timeframe  # Note: setting this to "today 1-y" will return an error. Leave for now.

    def prepare_data(self, keyword_list: List[str]) -> Dict[str, str]:

        json_dict = {"keyword" : keyword_list[0]}

        data = self.get_data(keyword_list=keyword_list)

        json_dict["data"] = data.to_json(orient="index")

        # data = data.drop(labels=['isPartial'], axis='columns')

        return json_dict

    def get_data(self, keyword_list: List[str]) -> pd.DataFrame:
        """
        Get data from Google Trends
        :param keyword_list: The API allows for a list of keywords to be passed in, but we're only using one for now.
        :return:
        """
        self.pytrends.build_payload(kw_list=keyword_list, timeframe=self.timeframe)
        return self.pytrends.interest_over_time()  # dataframe

    @staticmethod
    def data_to_json(df: pd.DataFrame) -> str:
        return df.to_json(orient='index')

    @staticmethod
    def plot_data(df: pd.DataFrame, title: str, x_label: str, y_label: str) -> None:
        plt.plot(df.index, df[title])
        plt.xlabel(x_label)
        plt.ylabel(y_label)
        plt.show()


def main():
    pytrends_processing = PyTrendsProcessing()
    df = pytrends_processing.get_data(["finance"])
    print(df)
    # What type is the date index?
    print(type(df.index))
    # pytrends_processing.plot_data(df, "Blockchain", "Date", "Interest")

    # Json example
    json = pytrends_processing.data_to_json(df)
    print(json)


if __name__ == '__main__':
    main()

