shopping_list = ['peanuts', 'pretzels', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']

puts "Add a new item to the list:"
add_to_list = gets.chomp
shopping_list.push(add_to_list)
puts shopping_list

puts "Remove an item from the list:"
remove_from_list = gets.chomp
shopping_list.delete(remove_from_list)
puts shopping_list

puts "Here's a swap of pretzels to ice cream:"
shopping_list[1].replace("ice cream") 

puts shopping_list

puts "And now here's the list in reverse: "
shopping_list.reverse.each { |val| puts val }

puts "Finally, here's the list as an ordered list:"
shopping_list.each_with_index { |val, ind| puts "#{ind + 1}: #{val}" }


puts "Give me a number:"
user_input = Integer(gets.chomp)**2
puts "The calculated number is #{shopping_list[0].length + user_input}"

puts "Is the list even?"
if shopping_list.length % 2 == 0
	puts "It is!"
else 
	puts "Nope!"
end

first_list_item =  shopping_list[0]
if first_list_item[0] == "a" 
	puts "The second item starts with the letter A"
else 
	puts "Nope, starts with a different letter"
end
