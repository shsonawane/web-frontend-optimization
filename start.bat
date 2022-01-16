
echo "Starting Server"
start cmd /k node ./js/server.js

echo "Creating Files"
python ./python/crawler.py

echo "Getting Page Load Time"
python ./python/page_load_timer.py

cd ./plots

echo "Creating Plot"
Rscript ./plot_multi_pages.R

echo "Plot Complete"
