#add a new key value pair
letter_to_points[" "] = 0

#get returns value in function or sets default as 30
inventory.get("stone glove", 30)

#loops through each key in dict
for element in oscars:
  print(element)

#retrieves list of values from dict
for element in oscars.values():
  print(element)

#pop dict entry and replace key
spread["present"] = tarot.pop(22)

#iterate over key value pairs in dictionary
for key,value in spread.items(): 
  print("Your " + key + " is the " + value + " card.")

#list comprehension to merge to lists into key/value pair
letter_to_points = { k:v for (k,v) in zip(letters, points)}
