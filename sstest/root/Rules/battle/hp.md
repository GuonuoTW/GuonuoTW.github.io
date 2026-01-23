# HP, Willpower, and Energy Pools

# HP 
Health Points (HP) represents a character's current health status. Each point of HP corresponds to one of 4 types: 

- Healthy (H) <- Default Unharmed.
- Blunt (B)
- Lethal (L)
- Atrophy/Aggravated (A)

(H+B+L+A=Total HP.)
This is indicated by HP(?), ? as the type.
B, L, A type of HP are collectively called "Wounded Points" or "Injuries". 
(ex. HP(H) means H type of HP.)

Every time your character takes damage, check whether they "Faint" or "Deteriorate".

**Fainting**
If the character no longer has any HP(H) or HP(A), Your character faints (Unconscious).

Your character wakes up the moment they recover a point of HP(H) or a point of Willpower.
The character can also be awakened by RP methods, ex. getting splashed cold water - ST decides whether it works or not.

**Deteriorating**
If the character no longer has any HP(H) and they DO have HP(A), then they also suffer deterioration along with fainting. At the end of the character's turn, a point of HP turns into HP(A) (HP(L) first). This continues until either the character only has HP(A) or they recover a point of HP(H). In addition, deterioration stops the moment the character recovers HP from any source, or with a successful "First Aid" Check. 

**Death**
If the character has only HP(A), they are consider "Dead" unless specified. Some abilities might trigger on death, but you can only choose ONE ability to trigger on death - any other abilities remain untriggered.

**Life states**
Some enhancements or abilities allow you to know a creature's life state. Unless specified, rather than exact numbers, you will only get one of the following vague states:

- Unharmed: The creature isn't injured at all. (All HP(H))
- Minor injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) does not exceed their total HP.
- Moderate injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) exceeds their total HP, but less than double their total HP.
- Severe injured: Convert all the wounded points into HP(B) (L->2B, A->3B), and the sum of HP(B) exceeds double their total HP.
- Near death: The creature only has HP(A), but is not dead for varying reasons (depending on the situation).
- Dead: The creature is dead.

**Taking Damage**
Likewise, Damage is also split into DMG(B), DMG(L), DMG(A).


When you take DMG(B), for every point of DMG, turn 1 HP(H) into 1 HP(B); If you no longer have HP(H), turn 1 HP(B) into 1 HP(L); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

When you take DMG(L), for every point of DMG, turn 1 HP(H) into 1 HP(L); If you no longer have HP(H), turn 1 HP(B) into 1 HP(L); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

When you take DMG(A), for every point of DMG, turn 1 HP(H) into 1 HP(A); If you no longer have HP(H), turn 1 HP(B) into 1 HP(A); If you no longer have HP(B), turn 1 HP(L) into 1 HP(A).

If you take multiple degrees of DMG, start converting from the lowest tier (B then L then A).

*example:*
*Character A has 20 HP ; he takes 3 points of Blunt Damage from the first attack.*
*— At this time, his health is recorded as 17 Unharmed + 3 HP(B).*
*Next, he steps on a trap and takes 4 points of Lethal Damage.
— At this time, his health is recorded as 13 Unharmed + 3 HP(B) + 4 HP(L).*
*Then he is blasted by a BOSS's ultimate move, causing 5 points of Aggravated Damage.*
*— At this time, his health is recorded as 8 Unharmed + 3 HP(B) + 4 HP(L) + 5 HP(A).*
*Following this, he unleashes an ultimate move at the cost of inflicting 10 points of Blunt Damage and 10 points of Lethal Damage on himself.*
*Processing the lighter 10 points of Blunt Damage first: since his Unharmed health is only 8, only 8 points of DMG(B) can convert the Unharmed to HP(B).*
*— After processing, his health is 0 Unharmed + 11 HP(B) + 4 HP(L) + 5 HP(A).*
*He still needs to take 2 points of DMG(B) and 10 points of DMG(L).*
*Continuing to process the 2 points of DMG(B), converting 2 points of HP(B) to HP(L).*
*— At this time, his health is 0 Unharmed + 9 HP(B) + 6 HP(L) + 5 HP(A).*
*He still needs to take 10 points of DMG(L).*
*His HP(B) is only 9, so 9 points of DMG(L) can convert HP(B) to HP(L).*
*— At this time, his health is 0 Unharmed + 0 HP(B) + 15 HP(L) + 5 HP(A).*
*He still needs to take 1 point of DMG(L).*
*Converting 1 point of HP(L) to HP(A).*
*— Finally, his health is 0 Unharmed + 0 HP(B) + 14 HP(L) + 6 HP(A). All health points are filled with damage, and the worst state is Aggravated, therefore he has Fainted, and his injuries will continue Deteriorating every Turn.*

**Natural Recovery**
A Short Rest (At least 15 minutes) heals 1 HP(B) back to HP(H).

Every 2 days, with at least 2 Long Rests (At least 8 hours) heals 1 HP(L) back to HP(H).

Every 7 days, with at least 7 Long Rests (At least 8 hours) heals 1 HP(A) back to HP(H).

These rests does not coexist: ex. A 7-day rest can either heal 1 HP(A) or 3 HP(L).
However, you may split a longer rest into multiple shorter rest.
_Additionally:_

For every Short Rest you've taken, you can attempt to do a Saving Check towards a type of debuff.

For every Long Rest, you may recover 1 point of Willpower.

For every Long Rest lasting at least 24 hours, you may heal 1 point of Stats Damage.

These effects are stackable.

**Natural Recovery Acceleration**
Some abilities grant you faster natural recovery. Divide the amount of time required for a full rest by the multiple number, round up. 

**Healing with Nursing**
See the Profession's description.

**Rapid Healing, Regeneration**
If a character possesses 1 point of Rapid Healing, they can recover 1 point of DMG(B) or DMG(L) at the start of every Turn,.
If a character possesses 4 points of Rapid Healing, they can recover a cumulative total of 4 points of Blunt or Lethal Damage, or recover 1 point of DMG(A) at the start of every Turn,.
Rapid Healing does not stack, but multiple instances can take effect simultaneously.
For example: If a player gains Rapid Healing 3 and Rapid Healing 2 through different abilities, the player can recover a cumulative total of 5 points of Blunt or Lethal Damage every Round, but they cannot recover Aggravated Damage, because no single instance of Rapid Healing reached 4.

If a character possesses 1 point of Regeneration, they can recover 1 point of DMG(B) or DMG(L) at the start of every Turn.
If a character possesses 4 points of Regeneration, they can recover a cumulative total of 4 points of Blunt or Lethal Damage, or recover 1 point of DMG(A) at the start of every Turn.
Regeneration does not stack, nor does it stack with Rapid Healing, but they can take effect simultaneously.

Additionally, Regeneration has the effect of regenerating lost limbs. If a player loses a limb, first determine its Size; multiply the Size of the lost limb by 100, then divide by the Regeneration points. The resulting number is the number of hours required to regenerate that limb.
Note: Certain excessively small limbs (such as eyes, single teeth, etc.) are treated as at least Size 1 during calculation.
Note: If one possesses the ability to reattach lost limbs, and the lost limb exists and allows reattachment, change the aforementioned hours to minutes.

**Temporary Hit Points**
Temporary HP works the same way as shields. Drop the tier of the injuries taken, and decrease the number from Temporary HP, starting from the highest tier.
Temporary HP will not be considered in abilities that use descriptors like "Inevitable ?? Damage" or "Convert target's HP to HP(?)".

Temporary HP is not stackable. Unless specified, Abilities that grant Temporary HP only take effect once per scene, and they will only last for that scene.

**Temporary Max HP Adjustments**
In some situations, such as gaining temporary EDR, you may gain extra HP. They are treated as HP(H).
When you lose these temporary HP, your current HP state is removed in the order of HP(H) -> HP(B) -> HP(L) -> HP(A). If after removal, your health is filled with Aggravated damage, you still Die unless specified.

*example: If you gain 1 point of temporary EDR, your max health increases by 1, and you gain 1 HP(H)*
*If you lose 1 point of EDR, your max health decreases by 1, and you simultaneously lose 1 point of HP(H); if there is no HP(H), you lose health in the order of Blunt - Lethal - Aggravated. If after the loss, your health is filled with Aggravated damage, and there are no special abilities, you are Dead.*

If your max health was reduced by any effect during a temporary Max HP increase, you receive the max health reduction effect as normal after the ability increasing your temporary max health is lost, if the reduction effect is still in effect.

*example: Your health is 8; you temporarily gain 3 points of max health, becoming 11. In the duration, you lose 1 point of max health, becoming 10. When the duration ends, your health becomes 7.*

**Secondary HP**
Certain special abilities allows players to utilize Willpower, other Energy Pools, or another specific value as a second HP bar to continue surviving when their health is entirely filled with Aggravated Damage.
When such abilities take effect, a new HP bar is established based on the maximum Willpower, maximum Energy Pool, or the specific value at the moment of activation.
Unless otherwise specified, the Secondary HP Bar still distinguishes between Blunt, Lethal, and Aggravated Damage. Furthermore, situations such as spending Willpower or energy, fluctuations in the value, or temporary increases or decreases to the maximum Willpower or Energy Pool limits will NOT affect the Secondary HP Bar.
Any healing abilities, including but not limited to potions, healing spells from other targets, one's own Rapid Healing, etc, prioritize healing the Secondary HP Bar. Only when the Secondary HP Bar is entirely filled with HP(H) will the overflowing portion heal the primary HP.

# Willpower

Your initial maximum Willpower point is equal to your Will. Willpower is NOT an energy pool, and is not considered one. Any Enhancements or Abilities related to energy pool do not apply.

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
Temporary Willpower is gained ignoring the maximum limit of Willpower.
After gaining Temporary Willpower, the next time a character spends Willpower, they spend Temporary Willpower first.
If the character is under an effect that causes them to lose their Willpower, Temporary Willpower would be lost first.
Temporary Willpower generally cannot stack. If a skill provides Temporary Willpower, its effect only activates once per Scene, unless otherwise specified.
As long as a character possesses Temporary Willpower, their Willpower is not considered to be 0.
Gaining Temporary Willpower is NOT a way of recovering Willpower, so it cannot trigger certain effects and abilities, nor can it allow a character to wake up from Fainting.
Unless otherwise specified, Temporary Willpower generally lasts for one Scene.

**Temporary Willpower Adjustments**
A character's Willpower may change due to some effects. Since Willpower is derived from Will, when it changes, the corresponding Willpower pool will also change. There are also some abilities that can directly affect the Willpower max limit.
If you temporarily gain an ability that increases Will, such as gaining 1 point of Stats, this increases both Will and Willpower max limit. However, this new slot is empty and not filled until your Willpower recovers.
*example: If you temporarily gain 1 point of DTM, the corresponding Will increases by 1 point, and your Willpower max limit increases by 1 point. However, this is 1 point of empty limit and will not grant you 1 point of usable Willpower immediately*.

If you suffer an ability that decreases Will, such as losing 1 point of Stats, your Will decreases, and the corresponding Willpower max limit will also decrease. At the same time, if your current Willpower is greater than your Willpower pool max limit at this time, you lose the excess portion. If the Willpower max limit recovers later, you will not regain the lost Willpower.
*example: If you lose 1 point of DTM, you reduce the Will by 1 point and simultaneously reduce the Willpower max limit by 1 point. If your current Willpower is greater than the Willpower max limit at this time, you lose the portion exceeding the limit. Later, when your DTM stat recovers, your Will recovers, and the Willpower max limit also recovers, but the Willpower previously lost due to exceeding the limit will not be returned.*

Note: Certain abilities that only affect Will Checks or Will Saving Throwing do not affect Will, so they will not affect the Willpower max limit.

# Energy Pools

**Energy Pool Categories**
All Energy Pools in the Resources section are divided into "General Energy Pools" and "Special Energy Pools"

General Energy Pools are usually further divided into "Eastern Energy Pools" and "Western Energy Pools". Some General Energy Pools belong to both Eastern and Western Energy Pools simultaneously - in this case, they are referred to as Energy Pools belonging to both East and West.

Special Energy Pools are neither Eastern nor Western Energy Pools.

**Key Stats of the Energy Pool**
The key stats of an energy pool decides its maximum value. Generally, energy pools are dependent on 2 stats; the sum of them is the maximum value of the energy pool.

**Energy Pool Subcategories**
Based on their key stats, energy pools can be categorized into Physic Energy Pools, Mental Energy Pools, and Social Energy Pools. If the Energy Pool's key stats is from two different stat categories, the Energy Pool belongs in both categories.

**Obtaining Energy Pools**
There are 3 methods to obtain an energy pool.
- Purchase: Some Energy Pools can be purchased directly.
- Comes with the resource: Some Energy Pools are only obtainable through buying other resources.
*Example: Mana Energy Pool.*
- Upgrade: Some Energy Pools can only be obtained from upgrading other Energy Pools.

**Usage of Energy Pools**
Each Energy Pool will mention how they are used in their page. 
Apart from this, certain Titles, Alternations, Bloodlines, etc., may provide other uses for certain Energy Pools after purchase by the player.
Some abilities allow players to select a specific Energy Pool in a catogory. Unless otherwise specified, players can only choose general Energy Pools.
*example: "Infinite Punch" requires the player to choose a Physical Energy Pool, but they cannot choose Ripple, because Ripple is a special Energy Pool.*
*example 2: "Nail Punch" requires the player to pay 1 point of energy. Therefore, the player cannot pay Calories, because Calories is a special Energy Pool.*

**Recovery of Energy Pools**
Each Energy Pool will mention the recovery means of that energy on its page. Certain Titles, Modifications, Bloodlines, etc., may provide other recovery methods for certain Energy Pools upon purchase by the player.

**Substitute Spending of Energy Pools**
Certain Energy Pools can substitute for each other for Spending.
When the target has immunity corresponding to the respective Energy Pool, it is calculated based on the new Energy Pool.
*example: Against an effect that is immune to Mental energy, using "Force" to substitute for "Interna", the "Interna" Energy effect after substitution will not be immunized.*
*example2: Against an effect that is immune to Mental energy, using Noble Qi to substitute for Demon Energy, then the Noble Qi effect after substitution will be immunized.*