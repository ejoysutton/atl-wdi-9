class Person
	attr_accessor :name
	attr_reader :age, :count
	@@count = 0
	def initialize(name:, age:)
		@name = name
		@age = age
		@@count += 1
	end

	def to_s
		"Name is #{@name} and age is #{@age}"
	end

	def can_vote
		@age > 17
	end

	def say_name
		puts "Hi, my name is #{@name}"
	end

	def say_age
		puts "I am #{@age} years old."
	end

	def self.instances
		@@count
	end

end

class LoudPerson < Person
	def say_name
		puts "HEY!! MY NAME IS #{@name.upcase}!!!"
	end
end

class FakeId < Person
	def can_vote 
		@age > 0
	end
end

class QuietPerson < Person
	def say_name
		"...I'm #{@name}"
	end
end

class VeryLoudPerson < LoudPerson
	def say_age
		"I'M #{@age} YEARS OLD, AREN'T YOU GLAD???"
	end
end

class TwoHeadedPerson < Person
	attr_reader :second_name
	def initialize(second_name:, name:, age:)
		@second_name = second_name
		@name = name
		@age = age
	end
	def say_name
		"Hi, I'm #{@name} and #{@second_name}."
	end
end


joy = LoudPerson.new(name: 'Joy', age: 34)
jay = QuietPerson.new(name: 'Jay', age: 32)
mike = FakeId.new(name: 'Mike', age: 12)
bob = TwoHeadedPerson.new(name: 'Bob', age: 45, second_name: 'Bill')
sally = VeryLoudPerson.new(name: 'Sally', age: 28)

puts !!joy.can_vote
puts !!mike.can_vote

puts Person.instances

puts joy.say_name
puts jay.say_name
puts bob.say_name
puts sally.say_name
puts sally.say_age