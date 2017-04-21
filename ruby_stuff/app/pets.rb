class Pet
	attr_reader :age, :name
	attr_accessor :type
	def initialize(name, type, age)
		@name = name
		@type = type
		@age = age
	end
	def to_s
	  	"#{@name} is a #{@age} year old #{@type}."
	end
	# def name #Getter
	#   	@name
	# end
	# def name=(name) #Setter
	# 	@name = name
	# end
	# def type #Getter
	#   	@type
	# end
	# def type=(type) #Setter
	# 	@type = type
	# end
	# def age #Getter
	# 	@age
	# end
	# def age=(age) #Setter
	# 	@age = age
	# end
	def inc_age #more control!
		@age += 1
	end

end

miko = Pet.new("Miko", "Dog", 2)
ginger = Pet.new("Ginger", "Cat", 7)
esme = Pet.new("Esme", "Cat", 4)

puts miko
puts ginger
puts esme

puts "My #{esme.type} is awesome and her name is #{esme.name}."

esme.inc_age

puts esme
ginger.type = "Tiger"

puts ginger
