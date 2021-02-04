
var beerItem1 = { 
    'MainName': 'Guiness',
    'SubName': 'Stout',
    'MainDescription': 'Stout',
    'SubDescription': 'A tasty stout from Ireland',
    'Price': 5.99,
}

var menuGroup1 = {
    'GroupName': 'Dark Stuff',
    'GroupItems': [beerItem1, beerItem1, beerItem1, beerItem1, beerItem1]
};


var columnData = [ menuGroup1 ]

var menuData = {
    'ColumnData': [ columnData, columnData, columnData, columnData ] 
}

export default menuData;

