# Custom Progress Bar

What this code should do is to give you an array which contains info on a bar.

# Installation

Coming Soon...

# Usage

```js
const cpb = //how it will be imported

cpb.bar(10, 100)
```

## Parameters

|    Param   |    Type    | Required |
|------------|------------|----------|
| Percentage |`int` (>100)| true     |
| Max        |`int`       | true     |
| Empty Char | any        | false    |
| Fill  Char | any        | false    |

### *Percentage* 
This is what percentage of the bar will be filled.
> `50` will fill half the bar
> `100` will fill the entire bar.

***Max*** - The amount of bar elements allowed to be generated.
> If `10` it will generate 50 bar elements, and paired with `10` for *percentage*, 5 bars will be marked filled and the 45 rest will be marked empty. (10% of 50 = 5)

***Empty Char*** - What empty bar elements elements will be represented by. If not set it will be the default `0`

***Fill Char*** - What filled bar elements elements will be represented by. If not set it will be the default `1`

