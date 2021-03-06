var data = [
    "RUDULRLLUULRURDDRRUDURULLLDRLRLUDDLUDUDDUDRRDUDULDUUULLRULLRLDDLDLDDRLRRRRUDLLDDUULDRLLUDDRRUURLULRRRDLLURRUUDURUDDURLUDDDLUDDUUDUURUDLRDRDRLRDRLDRUDRUUDLRDDRRURDDLRDDRRURDUDDLULLUDRURURRRLRRUDUULULULRRLDLUDUURRLLRUDLLDRDDLRRRULRUDLULDDLLLULDLRUDLLLLRDDLRDRLDRLLRDRRDLRDULULRLLLDRUDRRRUULRUULDRURLUDRURRDLLDLRDLDDDDRRLUDLRRLUUUURDRDDLRRURURRDUULLRLURLURUDDDRDURDUUDRLRLRRLDDLDLDLDDDUDDULURLDDLLRLRRDULUDDLULRLUDDLDLRULUUUDRLDRUDURLUDDRLLRUULDLRRRRDLLLLURULLRDRRUDLUULRRDLLRLRLUDLDDULLDLLRDLDLL",
    "LLUUUUUUDUDRLRDRDLDURRRLLRRLRURLLUURRLLUDUDLULUURUUURDLUDLDDLULLRDLRUULDLRDUDURLLDDUDUDULLUDDUULLLUULRRRLULRURRDLRUDUDDURRRDRUURDURLLULLRULLDRUULLURLDRDUUDDDDDDRRLDRLRRRLULDDUURRLLLLDRURLURDRDRDURUDUURRDUDUDRLLUUDDRLUDDDRDLDLRLDRURRDLLRULDRLLURURRLUULLRLRRURDDRDRUUURUURUUUDLLRRLUDRLDLRLURLDLUDDUDDDLDUDRRLDLRURULRLLRDUULURRRULDLLLRLDDDUURRRRDULLRURRLULULDLRRUDUDDLRUURDLDUDDUDRRDLRRRDUDUUUDLLDDDDLURLURRRUUULLLULRRLLLLLLULDUUDLRUDRRDLRDUUDUDLLRLDLLRUURDUUURUUUDDLLUUDLULDURLULULUUUDRUDULLURRULRULLRDLDDU",
    "RLUUURULLDLRLDUDRDURRDUURLLUDDDUULRRRLRLURDDRUULUDULDUUDDDDUDDDDRUDDLDUUDRUDLRRRLLRDDLLLRLLRUULRUULDDRURRLURRLRLULDDRRRDDURDDRDRDULRUDRUUDULRLLULDLRLLDRULRDDRRDDUDLRLLUDRDRRRLUDULRDLRDDURRUUDDRRUDURRUUUDDRRDUDURLUUDUDUURDDDLURLULLUULULURUDUUDRUDULLUUULURDLDUULLDDLLDULRLRLRDUUURUUDLRLDURUDRLDULLUDLDLLRDUURRDUDURLUUUDLLRRULRLULRLDLLURDURRULRLLRRDUDLLRDRRRRDLUUDRUUUDDLRLUDDDDDDRURRRUUURRDLLRURLDDLLDLRRLLLDRRULRRUDLDRDDRRLULURLLUURURURRRRUUUUURUDURLRLLLULULDLLDLRDRRULUDUDRDRRDRDRRDUDLLLRUDRUDDDULRULRRRDRLRUUUURUDURDUUULLULRUDDULDUUDLDURRD",
    "ULRULDDLDLULLLRRRLRUDDDDDLLDDUDLRRDULUUDRDLRRURDRRLUULRURUDRRULDLLLUDRUUDULULUDDRUDDDRDURRRDRDUUURLRDULUDRDRLDRUDDLLLDRRULUDLUDLDLLRRUDUULULDLDLLUURDLDDLLUUDURLURLLLDRDLDRRLRULUURRDRULRUUURULRRUDDDDLLDLDDLLRRLRRRRDUUDUDLDRDRRURDLRURULDLRDLLLLRUDRLLRDLRLRDURDRUDURRRLRDRDLLRLUDDDDRLRLLDUURRURLUURUULUDLUURDRRUDDLUDUDDDURRDRUDRLRULDULUUUUUUDDUDRUDUUURUDRRDLUDLUUDUULUDURDLDDDLLURRURUUDUDDRRDRLLULULDRLRURRDDDRDUUURDDDRULUDRDDLDURRLDDDLRRRLDDRDURULDLUDLLLURLURRLRRULDLLDDUDRRULDRRRRLURRUULRRRUDLURDLLDLLDULUUDRRLDLLLDRLRUDLUULDLDRUDUDURDRUDRDDDLRLULLUR",
    "LRLUUURRLRRRRRUURRLLULRLULLDLUDLUDRDDRLDLRLULLURDURLURDLLRLDUUDDURRRRLDLLRULLRLDLLUUDRLDDLLDRULDRLLRURDLRURRUDLULLRURDLURRURUDULLDRLLUUULUDRURRUUDUDULUUULRLDDULDRDLUDDUDDDLRURULLDLLLRLLUURDLRUDLLLLDLLRLRUUUDDRUUUUDLDLRDDURLDURUULLLUUDLLLLDULRRRLLDLDRRDRLUDRUDURLLUDLRLLUDUDRDDDRDLRDLRULUULDRLUDLRLDUURLRRLUDDDUUDDDUDRLDLDUDLURUULLDDDURUUULRLUDLDURUUDRDRURUDDUURDUUUDLLDLDLDURUURLLLLRURUURURULRULLRUDLRRUUUUUDRRLLRDDUURDRDRDDDUDRLURDRRRUDLLLDURDLUUDLLUDDULUUDLDUUULLDRDLRURUURRDURRDLURRRRLLUUULRDULDDLDUURRDLDLLULRRLLUDLDUDLUUL"
];

const DIR_UP = 'U';
const DIR_RIGHT = 'R';
const DIR_DOWN = 'D';
const DIR_LEFT = 'L';


function part1() {
    const data1 = data;    
    var pinpad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const ROW_COUNT = pinpad.length;
    const COL_COUNT = pinpad[0].length;

    let currentNum = 5;
    let direction = 0;
    let currentRow = 1;
    let currentCol = 1;
    let code = "";
    for(let i=0; i < data.length; ++i) {
        for(let j=0; j < data[i].length; ++j) {
            let char = data[i][j];
            if(char == DIR_UP) {
                --currentRow;
            }
            else if (char == DIR_RIGHT) {
                ++currentCol;
            }
            else if (char == DIR_DOWN) {
                ++currentRow;
            }
            else if (char == DIR_LEFT) {
                --currentCol;
            }

            if(currentRow < 0) {
                currentRow = 0;
            } 
            else if(currentRow >= ROW_COUNT) {
                currentRow = ROW_COUNT - 1;
            }

            if(currentCol < 0) {
                currentCol = 0;
            } 
            else if(currentCol >= COL_COUNT) {
                currentCol = COL_COUNT - 1;
            }
        }
        code += pinpad[currentRow][currentCol].toString();
    }
    console.log(code);
}


part1();


function part2() {
    const data2 = data;
    var pinpad = [
        [0,  0,   1,   0,  0],
        [0,  2,   3,   4,  0],
        [5,  6,   7,   8,  9],
        [0, 0xA, 0xB, 0xC, 0],
        [0,  0,  0xD,  0,  0]
    ];
    const ROW_COUNT = pinpad.length;
    const COL_COUNT = pinpad[0].length;

    let currentNum = 5;
    let direction = 0;
    let currentRow = 1;
    let currentCol = 1;
    let code = "";
    let moveRow, moveCol;
    for(let i=0; i < data2.length; ++i) {
        for(let j=0; j < data2[i].length; ++j) {
            let char = data2[i][j];
            moveRow = currentRow;
            moveCol = currentCol;
            if(char == DIR_UP) {
                --moveRow;
            }
            else if (char == DIR_RIGHT) {
                ++moveCol;
            }
            else if (char == DIR_DOWN) {
                ++moveRow;
            }
            else if (char == DIR_LEFT) {
                --moveCol;
            }
            if(!(moveRow < 0 || moveCol < 0 || moveRow >= ROW_COUNT || moveCol >= COL_COUNT
                || !pinpad[moveRow][moveCol])) {
                currentRow = moveRow;
                currentCol = moveCol;
            }                                       
        }
        code += pinpad[currentRow][currentCol].toString(16).toUpperCase();
    }
    console.log(code);
}

part2();