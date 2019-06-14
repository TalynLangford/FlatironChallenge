lines = ARGF.read.split("\n")

lines.each do |line|
    a = 1
    b = 2
    result = 0
        case line.to_i
        when 1
            puts 1
        when 2
            puts 1
        else
            (line.to_i-2).times do 
                result = a + b 
                a = b 
                b = result
            end
            puts result
        end
end