/*

1. Restocking the Warehouse

A purchasing manager must buy a specific number of units of an item
to replenish the warehouse.  The primary supplier has a list of containers, each with a number of units.  The manager must buy contiguous containers,
starting at container 0 and continuing until at least the desired number has been purchased.  If there are not enough units available, they must be purchased from another 
supplier.  If any excess items must be purchased, they must be resold.  Determine the remaining number of items to be purchased or sold after purchasing from
the primary supplier.

Example:
n=5
itemCount = [10, 20, 30, 40, 15]
target = 80

The manager starts buying at index 0 and continues until all available units are purchased or until at least 80 units have been purchased.  The manager
will buy containers with itemCounts = 10 + 20 + 30 + 40 = 100.  Since too many items were purchased, the number sold is purchased - target = 100 - 80 = 20 units

If target = 130, the manager will purchase all of the units from the primary supplier for a totla of urchaes = 115.  Then another
target - purchases = 130 - 155 = 15 additional units must be purchased

Function descriptino:

complete the function restock:

restock has the following params: int itemCount[n]: an array of ints that denote the item counts of each container in the order they must be purchased
int: target: an int that denotes the target number of items needed

returns:
int: the number of uniots that must be resold or that must be purchased from an alternate uspplier.

constraints:

1 <= n =< 10^5
1 <= target <= 10^9
1 <= itemCount[i] <= 10^9
*/


function questionOne(itemCount: number[], target: number): number {
  let sum: number = 0
  
  for ( let num of itemCount ) {
    if (sum < target) {
      sum += num
    } else {

      return Math.abs(target - sum)
    }
  }

  return Math.abs(target - sum)
};

questionOne([10, 20, 30, 40, 15], 130)