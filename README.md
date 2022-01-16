# Web Frontend Optimization (Research Project)

When a webpage is requested a certain amount of time is spent on the data transfer over the network and server processing before the response is received by the client. But the entire page loading process still takes some time after the data is received. The data received over HTTP is a document with HTML source code which is then parsed as a structured data readable to the browser. This structural representation of the HTML or XML source code is known as the Document Object Model or DOM. The DOM is what allows a browser to access the HTML content and apply required modification using JavaScript. DOM represents every markup language element either as a node or an object. This results in an object orientation of the entire document which can then be easily modified and styled by programming and scripting languages to produce the required webpage. Although HTML document consists only of simple HTML elements, complex JavaScript and CSS is often embedded into the document to produce dynamic and well-styled webpages. This additional JavaScript and CSS results in more modification to the existing DOM. This overall process of DOM parsing with reference to JavaScript required for modification of the model along with the CSS applied to various nodes of DOM increases the overall page load time.

In this project, we discuss various ways of reducing the unwanted page load time at the client side. We will exploit browser capabilities to process a DOM and improve the page access time in total. We will also implement various front-end optimization techniques including minification and manipulation of the HTML, CSS, and JavaScript to produce better results. Meanwhile, we will try to obtain real-time page load information by performing browser simulation on optimized output and original web pages.

# Methodology
The primary focus of the research is page load time analysis and exploitation of client-side webpage parsing process by a browser. The research also implies usage of various front-end optimization techniques aiming to produce results with minimal page load time. Adaptation of the research is a qualitative type with objective as a consideration with duly obtained results.
Various front-end optimizations techniques are developed in Python and Node JS, which are then applied to various downloaded web pages from different websites. Set of web pages for each website is then obtained as an output from all optimization techniques. These web pages are then loaded into a browser to obtain required page load time results. These results are obtained using Selenium WebDriver over Mozilla Firefox to produce detailed information of the page access time. The data is obtained as a timeline with various data points representing the sequential processes required to fetch and parse an entire web page. Following ordered processes make up a complete page load timeline.
1. Navigation Start
2. Domain Lookup
3. Connect
4. Secure Connection
5. Request Document
6. Response Start
7. Response Received
8. DOM Loading
9. DOM Interaction
10. DOM Content Loading Event
11. DOM Complete
12. Load Event
Processes 1 to 7 is part of network and data transfer over half-duplex channel whereas processes 8 to 12 are the one responsible for HTML parsing done at clients end. Data gathered from this timeline is analyzed to produce better page load time at the browser level.

# Source Code
```
.
├── js              # Node JS source code with optimization technique and Express Server.
├── plots           # R project for ploting.
├── python          # Python3 source code with optimization technique and Selenium page load timer.     
├── pages.tar.gz    # Webpacks of downloaded web pages.
├── start.bat       # Start up - Windows 10+, a batch script.
└── start.sh        # Start up - Linux/Unix Systems, a shell script.
```

# Usage
```{sh}
cd /path/to/sourcecode/web-frontend-optimization
sh start.sh
```

```{cmd}
cd /path/to/sourcecode/web-frontend-optimization
./start.bat
```

# Results

Results of the page load time were obtained from Mozilla Firefox web browser using selenium web driver in python. This results show the time taken by the various process involved in web page rendering and help in a comparative analysis of all implemented front-end optimization techniques. All techniques, either minification or manipulation of the DOM are implemented on different websites involving a large amount of JavaScript and heavy HTML contains.

Results of the page load time obtain by selenium vary depending upon complexity and heftiness of the HTML documents requested by the browser. Results obtained forms a timeline of the render information fetched from the requested document on the browser side are below.

![Google](https://github.com/shsonawane/web-frontend-optimization/raw/main/plot-images/0001.jpg)

![YouTube](https://github.com/shsonawane/web-frontend-optimization/raw/main/plot-images/0002.jpg)

![Jaipur Manipal](https://github.com/shsonawane/web-frontend-optimization/raw/main/plot-images/0003.jpg)

![Pinterest](https://github.com/shsonawane/web-frontend-optimization/raw/main/plot-images/0004.jpg)

# References
[1] Senthil K., S. Bhat K., Jamadagni N., Sureshan S. and Prasad G. (2015). O3 - A Webpage Preprocessing Tool. In Proceedings of the 11th International Conference on Web Information Systems and Technologies - Volume 1: WEBIST, ISBN 978-989-758-106-9, pages 15-20.
[2] S. Zhang, C. Yang and M. Yu, "UE-based mobile web optimization," 2014 IEEE 7th Joint International Information Technology and Artificial Intelligence Conference, Chongqing, 2014, pp. 6-10.
[3] Y. Yao and J. Xia, "Analysis and research on the performance optimization of Web application system in high concurrency environment," 2016 IEEE Information Technology, Networking, Electronic and Automation Control Conference, Chongqing, 2016, pp. 321-326.
[4] MDN Web Docs (2018). ‘Introduction to the DOM’. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Mode l/Introduction. Accessed on: August 2018.
[5] In Agile Web and App Development by Ekaterina Novoseltseva (2017). ‘Web Performance Optimization Techniques’. https://apiumhub.com/tech-blog- barcelona/web-performance- optimization-techniques/. Accessed on: September 2018.
[6] PageSpeed Insights (2018). ‘Minify Resources (HTML, CSS, and JavaScript)’. https://developers.google.com/speed/ docs/insights/MinifyResources. Accessed on: September 2018.
[7] Google Developers (2018), ‘Lighthouse Tools for Web Developers’, https:// developers.google.com/web/tools/ligh thouse/.Accessed on: November 2018.
