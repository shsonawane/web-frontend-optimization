import collections
import textwrap
import csv
from selenium import webdriver
import os

class PageLoadTimer:

    def __init__(self, driver):
        """
            takes:
                'driver': webdriver instance from selenium.
        """
        self.driver = driver

        self.jscript = textwrap.dedent("""
            var performance = window.performance || {};
            var timings = performance.timing || {};
            return timings;
            """)

    def inject_timing_js(self):
        timings = self.driver.execute_script(self.jscript)
        return timings

    def get_event_times(self):
        timings = self.inject_timing_js()
        good_values = [epoch for epoch in timings.values() if epoch != 0]
        ordered_events = ('navigationStart', 'fetchStart', 'domainLookupStart',
                          'domainLookupEnd', 'connectStart', 'connectEnd',
                          'secureConnectionStart', 'requestStart',
                          'responseStart', 'responseEnd', 'domLoading',
                          'domInteractive', 'domContentLoadedEventStart',
                          'domContentLoadedEventEnd', 'domComplete',
                          'loadEventStart', 'loadEventEnd'
                          )
        event_times = ((event, timings[event] - min(good_values)) for event
                       in ordered_events if event in timings)
        return collections.OrderedDict(event_times)

path='http://localhost:3000/'

urls = ['Google.html',
		'tech1_output_Google.html',
		'tech2_output_Google.html',
        'tech4_output_Google.html',
		'YouTube.html',
		'tech1_output_Youtube.html',
		'tech2_output_YouTube.html',
        'tech4_output_YouTube.html',
		'Manipal.html',
		'tech1_output_Manipal.html',
		'tech2_output_Manipal.html',
        'tech4_output_Manipal.html',
        'Pinterest.html',
        'tech1_output_Pinterest.html',
        'tech2_output_Pinterest.html',
        'tech4_output_Pinterest.html'
		 ]
		 
title = ['google','youtube','jaipur-manipal','pinterest']
tc = 0
if __name__ == "__main__":
    driver = webdriver.Firefox()
    count = 0
    flg = True
    keys = ["title"]
    t = [['Original'],["Technique1"],["Technique2"],["Technique4"]]
    values=[[],[],[],[]]
    for url in urls:
        driver.get(path+url)
        timer = PageLoadTimer(driver)
        event_time = timer.get_event_times()
        values[count] = t[count] + list(event_time.values())
        count = count + 1
        if count == 4:
            count = 0
            with open(os.getcwd()+"/../plots/data/"+title[tc]+".csv", "w") as outfile:
                tc = tc + 1
                csvwriter = csv.writer(outfile)
                csvwriter.writerow(keys+list(event_time.keys()))
                csvwriter.writerow(values[0])
                csvwriter.writerow(values[1])
                csvwriter.writerow(values[2])
                csvwriter.writerow(values[3])
            print(title[tc-1] + " ...Saved!")
