from bs4 import BeautifulSoup
import os
import htmlmin

path = os.getcwd() + "\\pages\\"
urls=["Google.html", "YouTube.html", "Manipal.html", "Pinterest.html"]

for url in urls:
    file = open(path+url,"r+",encoding="utf-8" )
    data = file.read()
    soup=BeautifulSoup(data)

    # All Techniques
    js_file=open(path+url+".js","w",encoding="utf-8")
    
    js_include=soup.new_tag("script",src=url+".js")
    soup.body.insert(len(soup.body.contents),js_include)

    for script in soup.find_all('script'):
        if 'src' in script.attrs.keys():
            script_src=soup.new_tag("script",src=script.attrs['src'])
            soup.body.insert(len(soup.body.contents),script_src)
            if(script.string is not None):
                js_file.write(str(script.string))    
        else:
            js_file.write(str(script.string))

        script.replaceWith('')
    
    minified = htmlmin.minify(str(soup), remove_empty_space=True)
    with open(path+"crawl_output_"+url, "w", encoding="utf-8") as file:
        file.write(str(minified))
        file.close()
        
    print(url+" over!")
    
 