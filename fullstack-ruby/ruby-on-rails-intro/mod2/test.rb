puts "Hello world"

a = 5

if a == 3
	puts "a is 3"
elsif a == 5
	puts "a is 5"
else 
	puts "a is not 3 r 5"
end

b = 5

unless b == 6
	puts "b is not 6"
end

c = 10

while c > 9
	puts c -= 1
end

d = 9

until d >= 10
	puts d += 1
end

times_2 = 2
times_2 *= 2 while times_2 < 100
puts times_2

age = 21

case 
	when age >= 21
	puts "You can buy a drink"
	when 1 == 0
		puts "Written by a drunk programmer"
	else 
		puts "Default condition"
end

name = 'fish'
case name
	when /fish/i then puts "Something is fishy here"
	when 'Smith' then puts "Your name is Smith"
end