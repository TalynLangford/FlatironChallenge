lines = ARGF.read.split("\n")
lines.each do |line|
    puts line.reverse
end