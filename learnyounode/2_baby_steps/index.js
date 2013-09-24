var args, counter, total;

args = process.argv;
total = 0;

for (counter=2; counter<args.length; counter++) {
    total += parseInt(args[counter], 10);
}

console.log(total);