//JS_operators.js

let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3; 

// Should return true if a randomly generated number is greater than .5,
// false if it is less than .5.
function isHit()
{
    return Math.random() > 0.5;
}

// Returns true if the ship's health is above 0 AND
// ammo is above 0 false otherwise.
function shipCanFire()
{
    return shipAmmo > 0 && shipHealth > 0;
}

// Returns true if health is zero or less.
function isDestroyed(health)
{
    return health <= 0;
}

// Reduces ship health by 1 and increases ammo by 3.
function reloadShip()
{
    shipHealth--;
    shipAmmo += 3;
}


function fireShip(){
    if (shipCanFire()){
        shipAmmo--;
        if (isHit()){
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        }else {
            console.log("miss");
        }
    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    }
 }

    function encouter(){
        console.log("You see a target");
        if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
            fireShip();
            if (isDestroyed(targetHealth)) {
                console.log("Target eliminated");
            }
            if (isDestroyed(shipHealth)) {
                console.log("ship destroyed");
            }
        }
    }


encouter();

/** 
// Should return true if a randomly generated number is greater than .5,
// false if it is less than .5.
    function isHit()
    {
        if (Math.random() > 0.5)
        return true;
        else (Math.random() < 0.5)
        return false;
    }

// Returns true if the ship's health is above 0 AND
// ammo is above 0 false otherwise.
function shipCanFire()
{
    if (shipHealth > 0 && shipAmmo > 0)
    return true;
    else (shipHealth <= 0 && shipAmmo <= 0)
    return false;
}

// Returns true if health is zero or less.
function isDestroyed(health)
{
    if (health <= 0)
    return true;
}

// Reduces ship health by 1 and increases ammo by 3.
function reloadShip()
{
    shipHealth--;
    shipAmmo +3;

}

*/    