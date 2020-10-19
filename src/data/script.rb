current_dir = Dir.pwd
puts Dir[current_dir]
9

Dir.new('.').each {|file| puts file }

Dir.glob("*").each{|file| puts file}