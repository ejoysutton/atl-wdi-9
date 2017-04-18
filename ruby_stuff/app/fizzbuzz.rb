number_array = (1..20).to_a

number_array.each { |val|
	if val % 15 == 0
		puts "fizzbuzz"
	elsif val % 5 == 0
		puts "buzz"
	elsif val % 3 == 0
		puts "fizz"
	else 
		puts val
	end
}