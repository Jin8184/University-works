def avg_list(nlist):
    hap = 0
    for n in nlist:
        hap += n
    avg = hap / len(nlist)
    return avg


nlist = [2,5,8,3]
avg = avg_list(nlist)
print(avg)