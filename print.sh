sed -i -r 's/(.*)([0-9]+)(.*)/echo "\1$((\2+1))"/ge' test.txt
lp test.txt