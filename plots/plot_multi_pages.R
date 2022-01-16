
try(setwd(dirname(rstudioapi::getSourceEditorContext()$path)),silent = TRUE)

somePDFPath <- "plot.pdf"
pdf(file=somePDFPath,onefile=T, paper='A4r', width = 1200, height = 800)

webs <- c("google.com" , "youtube.com" , "jaipur.manipal.edu", "pinterest.com")


files <- paste("./data/",list.files("./data/"),sep="")
c=1
xlabels <- c("Navigation\nStart","DOM\nLoading", "DOM\nInteraction",
" \n(Start)\nLoad Content","\n(End)\nLoad Content","DOM\nComplete", 
  "\n(Start)\nLoad Event", "\n(End)\nLoad Event")
for( i in seq( 1, length(files), by=6)){
  data <- read.csv(files[i])
  data <- data[!(data$navigationStart != 0),]
  Original <- colMeans(data[-2:-10])
 
  data <- read.csv(files[i+1])
  data <- data[!(data$navigationStart != 0),]
  Technique1 <- colMeans(data[-2:-10])
  
  data <- read.csv(files[i+2])
  data <- data[!(data$navigationStart != 0),]
  Technique2 <- colMeans(data[-2:-10])
  
  data <- read.csv(files[i+3])
  data <- data[!(data$navigationStart != 0),]
  Technique3 <- colMeans(data[-2:-10])
  
  data <- read.csv(files[i+4])
  data <- data[!(data$navigationStart != 0),]
  Technique4 <- colMeans(data[-2:-10])
  
  data <- read.csv(files[i+5])
  data <- data[!(data$navigationStart != 0),]
  crawl <- colMeans(data[-2:-10])
  
  op <- par(no.readonly = TRUE)
  #change settings
  par(mar=c(8, 4, 2, 2) + 0.1)
  #plot( Original , main=webs[c], type="b", ylab="Time After Request (ms)",xlab=" ", xaxt = "n" , col= rainbow(3)[1], lwd=2)
  xrange <- range(c(1,length(Original)))
  yrange <-  range(c(Original,Technique1,Technique2,Technique3,Technique4,crawl)) 
  
  # set up the plot 
  plot(xrange, yrange, main=webs[c], type="n",xaxt="n", xlab="", 
    ylab="Time After Navigation (ms)",cex.lab=1.5,cex.main=1.5,cex.axis=1.3)
  grid (NULL,NULL, lty = 6, col = "cornsilk2") 
  lines( Original , col= rainbow(6)[1] , lwd=3 , type="b" )
  lines( Technique1 , col= rainbow(6)[2] , lwd=3 , type="b" )
  lines( Technique2, col= rainbow(6)[3] , lwd=3 , type="b" )
  lines( Technique3, col= rainbow(6)[4] , lwd=3 , type="b" )
  lines( Technique4, col= rainbow(6)[5] , lwd=3 , type="b" )
  lines( crawl, col= rainbow(6)[6] , lwd=3 , type="b" )
  axis(1, at=1:8,cex.axis=1.3, labels = xlabels,las=2)
  legend("topleft", c("Original","JavaScript At End","External JavaScript",
  "JS/CSS Minification","HTML Minification","All"), cex=1.5, bty="n", fill=rainbow(6))
  par(op)
  c=c+1
}

dev.off()
