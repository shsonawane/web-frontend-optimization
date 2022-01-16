echo "Extracting pages..."
rmdir /s ./pages
tar -xvzf pages.tar.gz 

echo "Running Optimization techniques"
python ./python/techniques/technique1.py
python ./python/techniques/technique2.py
python ./python/techniques/technique4.py
start cmd /k node ./js/techniques/technique4.js

echo "Starting Server"
start cmd /k node ./js/server.js

echo "Creating Files"
python ./python/crawler.py

echo "Getting Page Load Time"
python ./python/page_load_timer.py

echo "Creating Plot"
Rscript ./plots/plot_multi_pages.R

echo "Plot Complete"
