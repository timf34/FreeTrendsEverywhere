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

        data = data.drop(columns=['isPartial'])

        json_dict["data"] = data.to_json(orient="index")

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
    def plot_data(df: pd.DataFrame, title: str, x_label: str, y_label: str, show: bool = False) -> None:
        plt.plot(df.index, df[title])
        plt.xlabel(x_label)
        plt.ylabel(y_label)
        if show:
            plt.show()

    @staticmethod
    def save_plot(df: pd.DataFrame, title: str, x_label: str, y_label: str, filename: str) -> None:
        plt.plot(df.index, df[title])
        plt.xlabel(x_label)
        plt.ylabel(y_label)
        plt.savefig(filename)


def main():
    keyword = "finance"
    pytrends_processing = PyTrendsProcessing()

    # Get data
    df = pytrends_processing.get_data([keyword])
    # Plot the data
    pytrends_processing.plot_data(df, keyword, "Date", "Interest")

    # Save the plot as a svg file
    pytrends_processing.save_plot(df, keyword, "Date", "Interest", "test.png")

    # Convert the data to JSON
    json = pytrends_processing.data_to_json(df)


if __name__ == '__main__':
    main()

