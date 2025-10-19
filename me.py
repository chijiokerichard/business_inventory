# def sum_list(arr):
#     flattedArr = []
#     sum = 0
#     for a in arr:
#         if isinstance(a,list):
#             flattedArr.extend(sum_list(a))
#         else:
#             flattedArr.append(a)
#     return flattedArr
    

# a = sum_list([1,2,[2,3,[3,3]],[1,2]])
# print(a)
def fab():
    word = input("enter word to check?")
    wor = word[::-1]#reversing
    if wor == word:
        print(f"{word} is a palindrome")
    else:
        print(f"{wor} is not a palindrome")
        fab()
fab()


def sum_list(arr):
    sum = 0
    for a in arr:
        if isinstance(a,list):
            sum +=sum_list(a)
        else:
            sum+=a
    return sum
    

a = sum_list([1,2,[2,3,[3,3]],[1,2]])
print(a)

def countV(sen):
    vowel = ["e","i","a","o","u"]
    sum=0
    for v in sen:
        if v in vowel:
            sum+=1
    return sum

v = countV("come here")
print(v)

def fabi():
    start=[0,1]
    for s in range(0,10):
        b=start[s]+start[-1]
        start.append(b)
    return start
a = fabi()
print(a)
