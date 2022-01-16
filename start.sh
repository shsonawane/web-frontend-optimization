echo "Extracting pages..."
rm -r ./pages
tar -xvzf pages.tar.gz 

echo "Running Optimization techniques"
python ./python/techniques/technique1.py
python ./python/techniques/technique2.py
python ./python/techniques/technique4.py
node ./js/techniques/technique4.js

echo "Starting Server"
node ./js/server.js

echo "Creating Files"
python ./python/crawler.py

echo "Getting Page Load Time"
python ./python/page_load_timer.py

echo "Creating Plot"
Rscript ./plots/plot_multi_pages.R

echo "Plot Complete"