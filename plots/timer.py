import collections
import textwrap
import csv
from selenium import webdriver

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

import os

urls = ['Google.html',
		'tech1_output_Google.html',
		'tech2_output_Google.html',
        'tech3/Google.html',
        'tech4_output_Google.html',
        'crawl_output_Google.html',
		'YouTube.html',
		'tech1_output_Youtube.html',
		'tech2_output_YouTube.html',
        'tech3/YouTube.html',
        'tech4_output_YouTube.html',
        'crawl_output_YouTube.html',
		'Manipal.html',
		'tech1_output_Manipal.html',
		'tech2_output_Manipal.html',
        'tech3/Manipal.html',
        'tech4_output_Manipal.html',
        'crawl_output_Manipal.html',
        'Pinterest.html',
        'tech1_output_Pinterest.html',
        'tech2_output_Pinterest.html',
        'tech3/Pinterest.html',
        'tech4_output_Pinterest.html',
        'crawl_output_Pinterest.html'
		 ]
		 
		 
title = ['google','youtube','jaipur-manipal','pinterest']
driver = webdriver.Firefox()
    
def urlcall( outpath, url, req = 5):
    flg = True
    with open(outpath, "w") as outfile:
        csvwriter = csv.writer(outfile)
        for i in range(req):
            driver.get(url)
            timer = PageLoadTimer(driver)
            event_time = timer.get_event_times()
            if flg == True:
                csvwriter.writerow(list(event_time.keys()))
            csvwriter.writerow(list(event_time.values()))
            flg = False

if __name__ == "__main__":
    count = 0
    tc = 0
    for url in urls:
        urlcall(outpath=os.getcwd()+'/data2/'+title[tc]+'_'+str(count)+'.csv',url='http://localhost:3000/'+url)
        print(url + " ...Saved!")
        count=count+1
        if count >= 6:
            tc=tc+1
            count = 0
        
    
