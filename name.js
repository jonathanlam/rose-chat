// Takes a string as input and returns a possible name

function getName(repl) {
    // Convert all input to lower case, remove non-alpha chars (except hypens)
    // Split into a list of words
    var name = "";
    repl = repl.toLowerCase().replace(/[^a-zA-Z \-]/g, "").split(" ");
    
    var omit = ["hi", "hey", "my", "name", "is", "its", 
                'i', 'am', 'im', 'how', 
                'nice', 'to', 'meet', 'u'];
    
    // possible_names is repl with common english words (omit) deleted
    
    var possible_names = repl.filter(function(v) {
        return (!omit.includes(v));
    });
    
    
    // list of names in order of importance
    var names_list = ["jonno", "jono", "jonathan", "johnny", "john",
        "vincent", "therese", "karen", "maggie", "shannon", "david",
        "kim", "lisa", "jisoo", "jennie", "jenny",
        "amanda", "thy", "duy", "amy", "kevin", "celeste", "hannah",
        "ellen", "sophie", "lily", "charlene", "sharon",
        "victor", "alex", "jack", 
        "jessica", "jessi", "jess", // Names with similar must be placed in order
        "euginia", "eug", // same here
        "vinnie", "neha", "soph",
        "hung", "jamie", "anthony", "dylan", "anton", "andrew", "alina",
        "eric", "helen", "james", "jasmine", "jason", "patrick",
        "victor", "rachel", "sally", "chelsea", "sharon", "shaz", "marie",
        "peter",
        "rose" // Rose goes last, in case of inputs like "hi Rose, my name Is jonathan:)"
        ];
    
    if (possible_names.length == 1) {
        name = possible_names[0];
    } else {
        for (temp_name in names_list) {
            if (possible_names.includes(names_list[temp_name]))
            {
                name = names_list[temp_name];
                break;
            }
        }
    }

    // default name if we are unable to find a name in the reply
    if (name == "") name = "there";
    return name;
}

/*
Some tests

getName("i am jessica");
getName("i am jessica, how are you?");
getName("i am euginia");
getName("my name is eugie");
getName("my Name Is AnThoNy!!!");
getName("my Name Is Lisa:)");
getName("my Name Is Jennie:)");
getName("hi Rose, my name Is kevin:)");
getName("hi Rose, my name Is jonathan:)");
*/