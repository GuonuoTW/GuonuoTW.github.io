# HP, Willpower, and Energy Pools

# HP 
Health Points (HP) represents a character's current health status. Each point of HP corresponds to one of 4 types: 

- Healthy (H) <- Default Unharmed.
- Bludgeoning (B)
- Lethal (L)
- Atrophy/Aggravated (A)

(H+B+L+A=Total HP.)
This is indicated by HP(?), ? as the type.
B, L, A type of HP are collectively called "Wounded Points" or "Injuries". 
(ex. HP(H) means H type of HP.)

Every time your character takes damage, check whether they "Faint" or "Deteriorate".

**Fainting** <br>
If the character no longer has any HP(H) or HP(A), Your character faints (Unconscious).

Your character wakes up the moment they recover a point of HP(H) or a point of Willpower.
The character can also be awakened by RP methods, ex. getting splashed cold water - ST decides whether it works or not.


**Deteriorating** <br>
If the character no longer has any HP(H) and they DO have HP(A), then they also suffer deterioration along with fainting. At the end of the character's turn, a point of HP turns into HP(A) (HP(L) first). This continues until either the character only has HP(A) or they recover a point of HP(H). In addition, deterioration stops the moment the character recovers HP from any source, or with a successful "First Aid" Check. 

**Death** <br>
If the character has only HP(A), they are consider "Dead" unless specified. Some abilities might trigger on death, but you can only choose ONE ability to trigger on death - any other abilities remain untriggered.

**Life states** <br>
Some enhancements or abilities allow you to know a creature's life state. Unless specified, rather than exact numbers, you will only get one of the following vague states:

- Unharmed: The creature isn't injured at all. (All HP(H))
- Minor injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) does not exceed their total HP.
- Moderate injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) exceeds their total HP, but less than double their total HP.
- Severe injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) exceeds double their total HP.
- Near death: The creature only has HP(A), but is not dead for varying reasons (depending on the situation).
- Dead: The creature is dead.

**Taking Damage** <br>
Likewise, Damage is also split into DMG(B), DMG(L), DMG(A).


When you take DMG(B), for every point of DMG, turn 1 HP(H) into 1 HP(B); If you no longer have HP(H), turn 1 HP(B) into 1 HP(L); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

When you take DMG(L), for every point of DMG, turn 1 HP(H) into 1 HP(L); If you no longer have HP(H), turn 1 HP(B) into 1 HP(L); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

When you take DMG(A), for every point of DMG, turn 1 HP(H) into 1 HP(A); If you no longer have HP(H), turn 1 HP(B) into 1 HP(A); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

If you take multiple degrees of DMG, start converting from the lowest tier (B then L then A).

*Example:*

**Natural Recovery**
A Short Rest (At least 15 minutes) heals 1 HP(B) back to HP(H).

Every 2 days, with at least 2 Long Rests (At least 8 hours) heals 1 HP(L) back to HP(H).

Every 7 days, with at least 7 Long Rests (At least 8 hours) heals 1 HP(A) back to HP(H).

These rests does not coexist: ex. A 7-day rest can either heal 1 HP(A) or 3 HP(L).
However, you may split a longer rest into multiple shorter rest.
_Additionally:_

For every Short Rest you've taken, you can attempt to do a Debuff Saving Check.

For every Long Rest, you may recover 1 point of Willpower.

For every Long Rest lasting at least 24 hours, you may heal 1 point of Stats Damage.

These effects are stackable.

**Natural Recovery Acceleration**
Some abilities grant you faster natural recovery. Divide the amount of time required for a full rest by the multiple number, round up. 

**Rapid Healing, Regeneration**
WIP.

**Temporary Hit Points**
Temporary HP works the same way as shields. Drop the tier of the injuries taken, and decrease the number from Temporary HP, starting from the highest tier.
Temporary HP will not be considered in abilities that use descriptors like "Inevitable ?? Damage" or "Convert target's HP to HP(?)".

Temporary HP is not stackable. Unless specified, Abilities that grant Temporary HP only take effect once per scene, and they will only last for that scene.

**Temporary Max HP Adjustments**
WIP.


**Secondary HP**
WIP.

# Willpower

Your initial maximum Willpower point is equal to your Volition. Willpower is NOT an energy pool, and is not considered one. Any Enhancements or Abilities related to energy pool do not apply.

The character may use Willpower as long as they have self-awareness. That is, they may not use it when they are asleep, unconscious, or in other states that prevent conscious thinking.
**Using Willpower**
When the character performs an action (Attacks, Skill checks...) that only require a single Check (Extended actions are excluded), they may use 1 point of Willpower to gain +3 DP Perfect Bonus. This effect can only be used once per action, and does not spend any action.

Additionally, when a character is being attacked, the character can spend 1 point of Willpower to gain +3 DP Perfect Bonus against that specific attack as well.

Some enhancements or abilities might change this usage.

**Other usages of Willpower**
Resisting against Fainting due to injuries:
When the character faints due to injuries, they may spend 1 point of Willpower to remain conscious for 1 round in battle (Without spending an action) / 1 hour out of battle. After the specified time is up, the character may choose to spend another point of Willpower to remain conscious.

Resisting against Fainting due to conditions:
When the character faints due to hunger, or other sources, they may spend 1 point of Willpower to remain conscious for 3 hours. This can only be used once per scene and does not spend any actions. The character immediately faints after the duration, even if the cause of Fainting is fixed.
*Example: You will still faint from hunger, even if you eat in the duration.*

In both cases, The character will need to spend another point of Willpower if they suffer further injuries or conditions that would cause them to faint.
*Example: Bob takes 6L and faints, but he immediately uses a power of Willpower to stay up. On their turn, they immediately take another 2L damage from bleeding, which causes them to faint again. They need to spend another point to remain conscious.*

**Temporary Willpower**
WIP

**Temporary Max Willpower Adjustments**
WIP

# Energy Pools

**Dependent Stats of the Energy Pool**
The dependent stats of an energy pool decides its maximum value. Generally, energy pools are dependent on 2 stats; the sum of them is the maximum value of the energy pool.

**Energy Pool Subcategories**
Based on their dependent stats, energy pools can be categorized into Physiological Energy Pools, Mental Energy Pools, and Social Energy Pools. If the Energy Pool's dependent stats is from two different stat categories, the Energy Pool belongs in both subcategories.

**Obtaining Energy Pools**
There are 3 methods to obtain an energy pool.
- Purchase: Some Energy Pools can be purchased directly.
- Comes with the resource: Some Energy Pools are only obtainable through buying other resources.
*Example: Mana Energy Pool.*
