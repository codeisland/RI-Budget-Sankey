d3.mytimer = function(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, 
    timer = {
        c: callback,
        t: time,
        f: false,
        n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
        d3_timer_timeout = clearTimeout(d3_timer_timeout);
        d3_timer_interval = 1;
        d3_timer_frame(d3_timer_step);
    }
};  

//***************** data ****************************************//  

myData = [
  {
    "source":"General Revenue",
    "target":"General",
    "value":3446022968
  },
  {
    "source":"General Revenue",
    "target":"RI Higher Education Assistance Auth",
    "value":147000
  },
  {
    "source":"Federal Funds",
    "target":"General",
    "value":2728339814
  },
  {
    "source":"Federal Funds",
    "target":"Intermodal Surface Trans",
    "value":399514755
  },
  {
    "source":"Federal Funds",
    "target":"RI Higher Education Assistance Auth",
    "value":15465693
  },
  {
    "source":"Restricted Receipts",
    "target":"General",
    "value":270058775
  },
  {
    "source":"Restricted Receipts",
    "target":"Intermodal Surface Trans",
    "value":12352761
  },
  {
    "source":"Restricted Receipts",
    "target":"University - Colleges",
    "value":644000
  },
  {
    "source":"Operating Transfers from Other Funds",
    "target":"General",
    "value":48423478
  },
  {
    "source":"Operating Transfers from Other Funds",
    "target":"RI Capital Plan Fund",
    "value":267335029
  },
  {
    "source":"Debt",
    "target":"11-",
    "value":4747781
  },
  {
    "source":"Debt",
    "target":"Certificates of Participation",
    "value":18656925
  },
  {
    "source":"Debt",
    "target":"Garvee/Motor Fuel Tax Bond Issues",
    "value":32030000
  },
  {
    "source":"Other Funds",
    "target":"General",
    "value":12330081
  },
  {
    "source":"Other Funds",
    "target":"Intermodal Surface Trans",
    "value":253240247
  },
  {
    "source":"Other Funds",
    "target":"RI Temporary Disability Insurance",
    "value":198706124
  },
  {
    "source":"Other Funds",
    "target":"Bond Capital",
    "value":155363
  },
  {
    "source":"Other Funds",
    "target":"Garvee/Motor Fuel Tax Bond Issues",
    "value":10928029
  },
  {
    "source":"Other Funds",
    "target":"State Lottery",
    "value":692306302
  },
  {
    "source":"Other Funds",
    "target":"Assessed Fringe Benefits Admin",
    "value":37123794
  },
  {
    "source":"Other Funds",
    "target":"Central Utilities",
    "value":14244902
  },
  {
    "source":"Other Funds",
    "target":"Central Mail",
    "value":5617173
  },
  {
    "source":"Other Funds",
    "target":"Centrex",
    "value":4080029
  },
  {
    "source":"Other Funds",
    "target":"Automotive Maintenance",
    "value":13733063
  },
  {
    "source":"Other Funds",
    "target":"Central Distribution Center",
    "value":6739558
  },
  {
    "source":"Other Funds",
    "target":"Correctional Industries",
    "value":7704793
  },
  {
    "source":"Other Funds",
    "target":"Records Center",
    "value":882436
  },
  {
    "source":"Other Funds",
    "target":"Surplus Property Internal Service Fund",
    "value":2500
  },
  {
    "source":"Other Funds",
    "target":"Health Insurance Fund",
    "value":235532939
  },
  {
    "source":"Other Funds",
    "target":"Capitol Police Fund",
    "value":1060301
  },
  {
    "source":"Other Funds",
    "target":"Employment Security Trust",
    "value":218500000
  },
  {
    "source":"Other Funds",
    "target":"Retired Employees Health Fund",
    "value":49089615
  },
  {
    "source":"Other Funds",
    "target":"Bog Retiree Health Fund",
    "value":2536462
  },
  {
    "source":"Other Funds",
    "target":"Ripta Health Fund",
    "value":14594818
  },
  {
    "source":"Other Funds",
    "target":"Permanent School",
    "value":359000
  },
  {
    "source":"Other Funds",
    "target":"Touro Jewish Synagogue",
    "value":200000
  },
  {
    "source":"Other Funds",
    "target":"Teacher Retiree Health Fund",
    "value":7531279
  },
  {
    "source":"Other Funds",
    "target":"State Police Retiree Health Fund",
    "value":3073102
  },
  {
    "source":"Other Funds",
    "target":"Legislative Retiree Health Fund",
    "value":772532
  },
  {
    "source":"Other Funds",
    "target":"Judicial Retiree Health",
    "value":931493
  },
  {
    "source":"Other Funds",
    "target":"University - Colleges",
    "value":849745005
  },
  {
    "source":"Other Funds",
    "target":"RI Higher Education Assistance Auth",
    "value":8339268
  },
  {
    "source":"Other Funds",
    "target":"RI Industrial-Recreational Building Auth",
    "value":562975
  },
  {
    "source":"General",
    "target":"General Assembly - Constitution",
    "value":37781122
  },
  {
    "source":"General",
    "target":"Executive Dept",
    "value":4511489
  },
  {
    "source":"General",
    "target":"Office of Lieutenant Governor",
    "value":1084499
  },
  {
    "source":"General",
    "target":"Military Staff",
    "value":17057696
  },
  {
    "source":"General",
    "target":"RI Emergency Management Agency",
    "value":20450976
  },
  {
    "source":"General",
    "target":"Governor's Commission on Disabilities",
    "value":508257
  },
  {
    "source":"General",
    "target":"Commission on the Deaf & Hard of Hearing",
    "value":471540
  },
  {
    "source":"General",
    "target":"RI Council on the Arts",
    "value":2912011
  },
  {
    "source":"General",
    "target":"Historical Preservation and Heritage Commission",
    "value":4002933
  },
  {
    "source":"General",
    "target":"Office of Health and Human Services",
    "value":2391356418
  },
  {
    "source":"General",
    "target":"Board of Elections",
    "value":4137950
  },
  {
    "source":"General",
    "target":"RI Ethics Commission",
    "value":1576550
  },
  {
    "source":"General",
    "target":"Public Utilities Commission",
    "value":8459886
  },
  {
    "source":"General",
    "target":"Office of The Child Advocate",
    "value":658262
  },
  {
    "source":"General",
    "target":"RI Commission For Human Rights",
    "value":1471587
  },
  {
    "source":"General",
    "target":"Office of The Mental Health Advocate",
    "value":491504
  },
  {
    "source":"General",
    "target":"Office of Public Defender",
    "value":11325714
  },
  {
    "source":"General",
    "target":"Coastal Resources Management Council",
    "value":4197121
  },
  {
    "source":"General",
    "target":"RI Atomic Energy Commission",
    "value":1167197
  },
  {
    "source":"General",
    "target":"Public Telecommunications Auth",
    "value":425000
  },
  {
    "source":"General",
    "target":"RI Higher Education Assistance Auth-Agency",
    "value":4500000
  },
  {
    "source":"General",
    "target":"Dept of State",
    "value":7837670
  },
  {
    "source":"General",
    "target":"Dept of Attorney General",
    "value":36365551
  },
  {
    "source":"General",
    "target":"Treasury Dept",
    "value":35012306
  },
  {
    "source":"General",
    "target":"Dept of Admin",
    "value":398834213
  },
  {
    "source":"General",
    "target":"Dept of Human Services",
    "value":649364755
  },
  {
    "source":"General",
    "target":"Dept of Business Regulation",
    "value":12931738
  },
  {
    "source":"General",
    "target":"Elementary and Secondary Education",
    "value":1239741320
  },
  {
    "source":"General",
    "target":"Dept of Labor and Training",
    "value":101961244
  },
  {
    "source":"General",
    "target":"Dept of Environmental Management",
    "value":86589407
  },
  {
    "source":"General",
    "target":"Dept of Health",
    "value":122531163
  },
  {
    "source":"General",
    "target":"Behavioral Healthcare, Developmental Disabilities and Hospitals",
    "value":357867906.3
  },
  {
    "source":"General",
    "target":"Dept of Corrections",
    "value":188828720
  },
  {
    "source":"General",
    "target":"Dept of Children, Youth, and Families",
    "value":207461164
  },
  {
    "source":"General",
    "target":"Dept of Revenue",
    "value":117685449
  },
  {
    "source":"General",
    "target":"Dept of Public Safety",
    "value":119386228
  },
  {
    "source":"General",
    "target":"Public Higher Education",
    "value":9655716
  },
  {
    "source":"General",
    "target":"University of RI",
    "value":93462727
  },
  {
    "source":"General",
    "target":"RI College",
    "value":48819627
  },
  {
    "source":"General",
    "target":"Community College of RI",
    "value":48364428
  },
  {
    "source":"General",
    "target":"Judicial Dept - Constitution",
    "value":103926072
  },
  {
    "source":"11-",
    "target":"Dept of Revenue",
    "value":4747781
  },
  {
    "source":"Intermodal Surface Trans",
    "target":"Dept of Transportation",
    "value":665107763
  },
  {
    "source":"RI Temporary Disability Insurance",
    "target":"Treasury Dept",
    "value":220608
  },
  {
    "source":"RI Temporary Disability Insurance",
    "target":"Dept of Labor and Training",
    "value":198485516
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Military Staff",
    "value":1390000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"RI Emergency Management Agency",
    "value":167000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Governor's Commission on Disabilities",
    "value":1000000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Historical Preservation and Heritage Commission",
    "value":1900000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Coastal Resources Management Council",
    "value":750000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"RI Atomic Energy Commission",
    "value":100000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of State",
    "value":500000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Attorney General",
    "value":300000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Admin",
    "value":132547322
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Human Services",
    "value":165000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Transportation",
    "value":36323529
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Elementary and Secondary Education",
    "value":5887328
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Labor and Training",
    "value":2005996
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Environmental Management",
    "value":17059170
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Behavioral Healthcare, Developmental Disabilities and Hospitals",
    "value":7207286
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Corrections",
    "value":19527438
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Children, Youth, and Families",
    "value":2911831
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Dept of Public Safety",
    "value":6799959
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"University of RI",
    "value":18470000
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"RI College",
    "value":6834865
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Community College of RI",
    "value":4138305
  },
  {
    "source":"RI Capital Plan Fund",
    "target":"Judicial Dept - Constitution",
    "value":1350000
  },
  {
    "source":"Bond Capital",
    "target":"Dept of Admin",
    "value":155363
  },
  {
    "source":"Certificates of Participation",
    "target":"Dept of Attorney General",
    "value":1000000
  },
  {
    "source":"Certificates of Participation",
    "target":"Dept of Admin",
    "value":6370221
  },
  {
    "source":"Certificates of Participation",
    "target":"Elementary and Secondary Education",
    "value":6125876
  },
  {
    "source":"Certificates of Participation",
    "target":"Dept of Revenue",
    "value":4140663
  },
  {
    "source":"Certificates of Participation",
    "target":"University of RI",
    "value":1020165
  },
  {
    "source":"Garvee/Motor Fuel Tax Bond Issues",
    "target":"Dept of Transportation",
    "value":42958029
  },
  {
    "source":"State Lottery",
    "target":"Dept of Revenue",
    "value":692306302
  },
  {
    "source":"Assessed Fringe Benefits Admin",
    "target":"Dept of Admin",
    "value":37123794
  },
  {
    "source":"Central Utilities",
    "target":"Dept of Admin",
    "value":14244902
  },
  {
    "source":"Central Mail",
    "target":"Dept of Admin",
    "value":5617173
  },
  {
    "source":"Centrex",
    "target":"Dept of Admin",
    "value":4080029
  },
  {
    "source":"Automotive Maintenance",
    "target":"Dept of Admin",
    "value":13733063
  },
  {
    "source":"Central Distribution Center",
    "target":"Dept of Corrections",
    "value":6739558
  },
  {
    "source":"Correctional Industries",
    "target":"Dept of Corrections",
    "value":7704793
  },
  {
    "source":"Records Center",
    "target":"Dept of State",
    "value":882436
  },
  {
    "source":"Surplus Property Internal Service Fund",
    "target":"Dept of Admin",
    "value":2500
  },
  {
    "source":"Health Insurance Fund",
    "target":"Dept of Admin",
    "value":235532939
  },
  {
    "source":"Capitol Police Fund",
    "target":"Dept of Public Safety",
    "value":1060301
  },
  {
    "source":"Employment Security Trust",
    "target":"Dept of Labor and Training",
    "value":218500000
  },
  {
    "source":"Retired Employees Health Fund",
    "target":"Dept of Admin",
    "value":49089615
  },
  {
    "source":"Bog Retiree Health Fund",
    "target":"Dept of Admin",
    "value":2536462
  },
  {
    "source":"Ripta Health Fund",
    "target":"Dept of Admin",
    "value":14594818
  },
  {
    "source":"Permanent School",
    "target":"Elementary and Secondary Education",
    "value":359000
  },
  {
    "source":"Touro Jewish Synagogue",
    "target":"Treasury Dept",
    "value":200000
  },
  {
    "source":"Teacher Retiree Health Fund",
    "target":"Dept of Admin",
    "value":7531279
  },
  {
    "source":"State Police Retiree Health Fund",
    "target":"Dept of Admin",
    "value":3073102
  },
  {
    "source":"Legislative Retiree Health Fund",
    "target":"Dept of Admin",
    "value":772532
  },
  {
    "source":"Judicial Retiree Health",
    "target":"Dept of Admin",
    "value":931493
  },
  {
    "source":"University - Colleges",
    "target":"University of RI",
    "value":631426781
  },
  {
    "source":"University - Colleges",
    "target":"RI College",
    "value":115536249
  },
  {
    "source":"University - Colleges",
    "target":"Community College of RI",
    "value":103425975
  },
  {
    "source":"RI Higher Education Assistance Auth",
    "target":"RI Higher Education Assistance Auth-Agency",
    "value":23951961
  },
  {
    "source":"RI Industrial-Recreational Building Auth",
    "target":"RI Industrial - Recreational Building Auth",
    "value":562975
  }
]

//***************** set up variables ****************************// 


var margin = {top: 50, right: 210, bottom: 10, left: 10},
    width = 1160 - margin.left - margin.right,
    height = 630 - margin.top - margin.bottom;



//***************** sankey plugin ******************************// 

d3.sankey = function() {
    "use strict";

    var sankey = {},
        nodeWidth = 24,
        nodePadding = 8,
        size = [1, 1],
        nodes = [],
        links = [],
        curvature = .35;

    sankey.nodeWidth = function(_) {

        if (!arguments.length) {
            return nodeWidth;
        } else {
            nodeWidth = +_;
        }

    };

    sankey.nodePadding = function(_) {

        if (!arguments.length) {
            return nodePadding;
        } else {
            nodePadding = +_;
        }

    };

    sankey.nodes = function(_) {

        if (!arguments.length) {
            return nodes;
        } else {
            nodes = _;
        }

    };

    sankey.links = function(_) {

        if (!arguments.length) {
            return links;
        } else {
            links = _;
        }

    };

    sankey.size = function(_) {

        if (!arguments.length) {
            return size;
        } else {
            size = _;
        }

    };

    sankey.layout = function() {

        computeNodeLinks();
        addTagArrays();
        computeNodeValues();
        computeNodeBreadths();
        computeNodeDepths();
        computeLinkDepths();

    };

    sankey.curvature = function(_) {
        
        if (!arguments.length) {
            return curvature;
        } else {
            curvature = +_;
        }
    };

    sankey.relayout = function() {

        computeLinkDepths();

    };

    sankey.link = function() {

        var curvature = sankey.curvature();

        function link(d) {

            var x0 = d.source.x + d.source.dx, 
                x1 = d.target.x, 
                xi = d3.interpolateNumber(x0, x1), 
                x2 = xi(curvature), 
                x3 = xi(1 - curvature), 
                y0 = d.source.y + d.sy + d.dy / 2, 
                y1 = d.target.y + d.ty + d.dy / 2; 
            return "M" + x0 + "," + y0
                + "C" + x2 + "," + y0
                + " " + x3 + "," + y1
                + " " + x1 + "," + y1;

        }

        return link;

    };


    function computeNodeLinks() {

        nodes.forEach(function(node) {
            node.sourceLinks = [];
            node.targetLinks = [];
        });
        links.forEach(function(link) {
            var source = link.source,
                target = link.target;
            if (typeof source === "number") {
                source = link.source = nodes[link.source];
            }
            if (typeof target === "number") {
                target = link.target = nodes[link.target];
            }
            source.sourceLinks.push(link);
            target.targetLinks.push(link);
        });

    }

    function addTagArrays() { 

        nodes.forEach(function(node) {
            node.sTag = [];
            node.tTag = [];
        });
        links.forEach(function(link) {
            var source = link.source,
                target = link.target;
            if (typeof source === "number") {
                source = link.source;
            }
            if (typeof target === "number") {
                target = link.target;
            }
            //console.log("link",source.num);
            source.tTag.push(link.tt);
            target.sTag.push(link.st);
        });

    }

    function computeNodeValues() {// somewhere rows should be figured out

        nodes.forEach(function(node) { // returns the node values.  Max is used to cancel duplicates
            node.value = Math.max(
                d3.sum(node.sourceLinks, value),
                d3.sum(node.targetLinks, value)
            );
        });

    }

      // var moveSourcesRight = function () {
      //   nodes.forEach(function(node) {
      //     if (!node.targetLinks.length) {
      //       node.x = d3.min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
      //     }
      //   });
      // }

    var moveSinksRight = function (x) { //this happenes : x the number of columns

        nodes.forEach(function(node) {// node is each one
            if (!node.sourceLinks.length) {
                node.x = x - 1;
            }
        });

    }

    var scaleNodeBreadths = function (kx) { // in this case kx is 910

        nodes.forEach(function(node) {
            node.x *= kx;
        });

    }

    function computeNodeBreadths() { //pusts the x value on the node
    
        var remainingNodes = nodes,
            nextNodes,
            x = 0;

        while (remainingNodes.length) {
            nextNodes = [];
            remainingNodes.forEach(function(node) {
                node.x = x;
                node.dx = nodeWidth;
                node.sourceLinks.forEach(function(link) {
                    nextNodes.push(link.target);
                });
            });
      
        remainingNodes = nextNodes;
      
        ++x;
        }

        //
        moveSinksRight(x);

        scaleNodeBreadths((width - nodeWidth) / (x - 1)); // origin of kx is width(940) - nodeWidth(30) / 1

    }

    function descendByKey(array, key) { //used to sort an object from largest number to smallest

        var result = array.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });

        return result;

    }

    function ascendByKey(array, key) { //used to sort an object from smallest number to largest

        var result = array.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        return result;

    }

    function computeNodeDepths() {

        var nodeColumns = d3.nest() // this doesn't work
            .key(function(d) { return d.x; })
            .sortKeys(d3.ascending)
            .entries(nodes)
            .map(function(d) { return d.values; });


        function initializeNodeDepth() {
            
            var ky = d3.min(nodeColumns, function(nodes) { // comes up with a number to calulate a constant to size by
                return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
            });

            //console.log(ky); // ky becomes 4.226550311220813e-8 for this particular graph
            nodeColumns.forEach(function(nodes) {
                //console.log("nodes",nodes.count ); //dy gets added here for nodes
                nodes.forEach(function(node, i) {
                    node.y = i;
                    node.count = i;
                    node.dy = node.value * ky;
                });
            });

            //console.log(nodeColumns);

            links.forEach(function(link) {
                link.dy = link.value * ky; //dy gets added here for links
            });

        }

        function resolveCollisions() {
            nodeColumns.forEach(function(nodes) {
                var node,
                    dy,
                    y0 = 0,
                    n = nodes.length,
                    i;

                // Push any overlapping nodes down.
                //nodes.sort(ascendingDepth);
                for (i = 0; i < n; ++i) {
                    node = nodes[i];
                    dy = y0 - node.y;
                    if (dy > 0) { 
                        node.y += dy; 
                    }
                    y0 = node.y + node.dy + nodePadding;
                }

                // If the bottommost node goes outside the bounds, push it back up.
                dy = y0 - nodePadding - size[1];

                if (dy > 0) {
                    y0 = node.y -= dy;

                    // Push any overlapping nodes back up.
                    for (i = n - 2; i >= 0; --i) {
                        node = nodes[i];
                        dy = node.y + node.dy + nodePadding - y0;
                        if (dy > 0) { 
                            node.y -= dy; 
                        }
                        else { 
                            y0 = node.y; 
                        }
                        // or y0 = node.y; 
                    }
                }
            });
        }
        // nodeColumns[2][0].x = 303.3333333333333;
        //console.log( nodeColumns[2] );
        descendByKey(nodeColumns[0], "value");

        descendByKey(nodeColumns[1], "value");

        descendByKey(nodeColumns[2], "value");

        //nodeColumns[1].concat( nodeColumns[2] );


        //
        initializeNodeDepth();
        resolveCollisions();

    }

    function computeLinkDepths() { 

        nodes.forEach(function(node) {
            node.sourceLinks.sort(ascendingTargetDepth);
            node.targetLinks.sort(ascendingSourceDepth);
            ////console.log("this is where order is done",node.sourceLinks);
        });

        nodes.forEach(function(node) {
            var sy = 0, ty = 0;
            node.sourceLinks.forEach(function(link) {
                link.sy = sy;
                sy += link.dy;
            });
            node.targetLinks.forEach(function(link) {
                link.ty = ty;
                ty += link.dy;
            });
        });

        function ascendingSourceDepth(a, b) {
            return a.source.y - b.source.y;

        }

        function ascendingTargetDepth(a, b) {
            return a.target.y - b.target.y;
        }

    }

    // function center(node) {
    //   return node.y + node.dy / 3;
    // }

    function value(link) {

        return link.value;

    }

    return sankey;

};








(function () {
    "use strict";

    var sankey, obj, tip, tip2, fullValue, testValue, graph_links, 
        pick_all_rect, graph_labels, graph_rects, graph_headers, all_Lables,
        catagory, current_info, chart, allLinks, allNodes, rS, pS, lS,

        formatNumber = d3.format(",.0f"),
        format = function(d) { return "$" + numberWithCommas(d); },
        color = d3.scale.category20();

//********************** helper functions

    function numSort(a, b) {

        return a - b;

    }

    function stringSort(a, b) {

        return a - b;

    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    function ascendByKey(array, key) { //used to sort an object from smallest number to largest

        var result = array.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        return result;

    }

    function descendByKey(array, key) { //used to sort an object from largest number to smallest

        var result = array.sort(function(a, b) {
            var x = a[key],
                y = b[key];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });

        return result;

    }

    //******************************************
    //**
    //**
    //**  creates a nested object from from a key 
    //**  that you choose.  The values of the key
    //**  become the keys of the new object
    //**

    function groupObjectByProperty(list, key) {

        var hash = {},
            len = list.length,
            i = 0;

        for ( i = 0; i < len; i++ ){
            var keyOfObject = list[i][key];

            if (!(keyOfObject in hash)) {
                hash[ keyOfObject ] = [];
            }

            hash[ keyOfObject ].push( list[i] );
        }

        return hash;

    }
    // function groupObjectByProperty(list, key) { // version 1

    //     var hash = {},
    //         len = list.length,
    //         i = 0;

            

    //     list.forEach( function (obj) {
    //         var keyOfObject = obj[key];

    //         if (!(keyOfObject in hash)) {
    //             hash[ keyOfObject ] = [];
    //         }

    //         hash[ keyOfObject ].push( obj );
    //     });

    //     return hash;

    // }

    //******************************************
    //**
    //**
    //**  creates a nested array from an object
    //**  while using the keys of the object to create each array
    //**

    function objectToNestArray( hash ) {

        return Object.keys( hash ).map( function ( key ) {
             return hash[ key ];
        });

    }

    //******************************************
    //**
    //**
    //**  creates a nested object from from a key 
    //**  that you choose.  The values of the key
    //**  become the keys of the new object
    //**


    function grouped( list, key ) {

        var hash = groupObjectByProperty( list, key );

        var obj = objectToNestArray( hash );

        return obj;

    }

    //******************************************
    //**
    //**  
    //**  
    //**  
    //**  
    //**

    function groupedAndSort( list, groupKey, sortKey, direction ) {

        var nestArray = {},
            message = "direction must be up or down, you have broken sort method in loop",
            sorter = direction === "up" ? ascendByKey 
                        : direction === "down" ? descendByKey 
                        : console.log(message);

        nestArray = grouped( list, groupKey );

        nestArray.forEach( function ( obj, count ) {
            sorter( obj, sortKey); 
        });

        return nestArray;

    }

    function isEven( n ) {

        return !isNaN( n ) && (n % 2 == 0);

    }

//********************** model *******************************
//
//
//
//************************************************************

  function d3_interpolateRgb(a, b) {

    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }

    function dataModel(d1) {

        var obj =   { 
                        "eachNode" : [], 
                        "eachLink" : [], 
                        "fullList" : [] 
                    },
            
            next = d1;

       //  var next = d1.filter( function ( row ) {
            
       //      return (row[ "source" ] === "ELEMENTARY and SECONDARY EDUCATION");// && (row[ "value" ] < 100000);

        // });

        var next = d1.filter( function ( row ) {

            return row[ "value" ] > 0;
        });

        next.sort(function(a, b){
            return b.value - a.value;
        });

        next.forEach( function ( d ) {
            obj.eachNode.push({  "name": d.source });
            obj.eachNode.push({  "name": d.target });
            obj.eachLink.push({     
                                "source": d.source,
                                "target": d.target,
                                "sourceName": d.source,
                                "targetName": d.target,
                                "st": undefined,
                                "tt": undefined,
                                "theColor": undefined,
                                "num": 0,
                                "type": "link",
                                "value": +d.value 
                            });
        });

            // return only the distinct / unique eachNode
        obj.eachNode = d3.keys( d3.nest()
            .key(function (d) { return d.name; })
            .map( obj.eachNode )
        );

        // loop through each link replacing the text with its index from node
        obj.eachLink.forEach( function ( d, i ) {
            obj.eachLink[ i ].source = obj.eachNode.indexOf( obj.eachLink[ i ].source );
            obj.eachLink[ i ].theColor = obj.eachLink[ i ].source;
            obj.eachLink[ i ].target = obj.eachNode.indexOf( obj.eachLink[ i ].target );
            obj.eachLink[ i ].num = i;
        });

        obj.eachLink.forEach( function ( d, i ) {
            obj.eachLink[ i ].st = obj.eachLink[ i ].source
            obj.eachLink[ i ].tt = obj.eachLink[ i ].target
            //console.log(d);
        });

        // adds the colors to the nodes
        obj.eachNode.forEach(function ( d, i ) {
            obj.eachNode[ i ] =  { 
                                    "name": d,
                                    "theColor": color(i),
                                    "strokeColor": undefined,
                                    "num": i 
                                };
        });

        obj.eachNode.forEach( function ( d, i ) {
            var result = d3.rgb( obj.eachNode[ i ].theColor ).darker( 0.3 );
            obj.eachNode[ i ].strokeColor = result;
        });


            // function to get all of the colors to the links
        obj.eachLink.forEach( function ( d, i ) {
            obj.eachLink[ i ].theColor = obj.eachNode[ obj.eachLink[ i ].theColor ].theColor;
        });

      return obj;

    }

    obj = dataModel(myData);



    // current_info = (function () {
    //     var my = {};
    //         time_IN = null,
    //         time_OUT = null,
    //         state = {},
    //         last = {};

    //     // function getLast() {
    //     //     last = obj;
    //     // }

    //     my.timeSet = function ( name, time ) {
    //         if ( name === time_IN ) {
    //             //console.log(true);
    //             time_IN = time;
    //         }
    //         else if ( name === time_OUT ) {
    //             //console.log(true);
    //             time_OUT = time; }
    //         else {
    //             //console.log("not valid") 
    //         }
    //     };

    //     my.getState = function () {
    //         return {
    //             "In": time_IN,
    //             "Out": time_OUT,
    //             "state": state,
    //             "last": last
    //         }
    //     };

    //     my.report_in = function (its) {
        
    //         var current_in = {},  
    //             data = its.datum(),
    //             name = data.name || null,
    //             source = data.sourceName || null,
    //             target = data.targetName || null,
    //             total = data.value,
    //             title = name ? "ri" : "li";

    //         last = state;

    //         current_in = name ? { 
    //                             "title": title, 
    //                             "name": name, 
    //                             "total": total 
    //                         } :
    //                         { 
    //                             "title": title, 
    //                             "source": source, 
    //                             "target": target, 
    //                             "total": total 
    //                         };

    //         state = current_in;

    //     }


    //     return my;

    // })();





    //********************** view ********************************
    //
    //
    //
    //************************************************************

      //---------------- create layout for the chart ------------------------------------

    function Svg() {

        var svg = {};

        svg = d3.select("#chart").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
        return svg;

    }

    chart = Object.create( Svg() );



      //---------------- activate sankey plugin ------------------------------------

    var sankeyTotal = 0;
    var rightTotal = 0;
    var middleTotal = 0;
    sankey = Object.create( d3.sankey() );


    sankey.nodeWidth( 30 );

    sankey.nodePadding( 4 );

    sankey.size( [ width, height ] );

    sankey.nodes( obj.eachNode );

    sankey.links( obj.eachLink );

    sankey.curvature( .01 );

    sankey.layout();

    fullValue = sankey.nodes();

    fullValue.forEach( function (node, i) {

        if ( fullValue[i].sTag.length === 0 ) {
            //console.log(fullValue[i].value);
            sankeyTotal += fullValue[i].value;
        }

    });

    testValue = sankey.nodes()

    testValue.forEach( function (node, i) {

        if ( testValue[i].tTag.length === 0 ) {
            //console.log(testValue[i].tTag);
            rightTotal += testValue[i].value;
        }

    });

    testValue.forEach( function (node, i) {

        if ( testValue[i].sTag.length > 0 && testValue[i].tTag.length > 0) {
            middleTotal += testValue[i].value;
        }

    });

    // console.log( "sankeyTotal",sankeyTotal );

    // console.log( "rightTotal", rightTotal );

    // console.log( "middleTotal", middleTotal );

    // console.log( "1. sankeyTotal - middleTotal", sankeyTotal - middleTotal );

    // console.log( "2. middleTotal - rightTotal", middleTotal - rightTotal );

    // console.log( "3. sankeyTotal - rightTotal", sankeyTotal - rightTotal );


      //---------------- activate theTip ------------------------------------

    tip = Object.create( theTip() );

    tip2 = Object.create( theTip() );

    function floorFigure(figure, decimals){
        if (!decimals) decimals = 2;
        var d = Math.pow(10,decimals);
        return (parseInt(figure*d)/d).toFixed(decimals);
    };

    var grandTotal = sankeyTotal; 
    tip.attr( 'class', 'theTip' )
        .html( function ( d ) {
            var template_node =   [ 
                            "<span class='titleTip'>",
                            d.name.toUpperCase(),
                            "</span>",
                            "<div class='drawline'></div>",
                            "<span class='totalTip'><strong>Total: </strong>", 
                            format(d.value),
                            "</span><br>",
                            "<span class='totalTip inRed'>",
                            floorFigure(d.value/grandTotal*100, 3),
                            "%",
                            "<span class='budget'> of Budget </span>",
                            "</span>"
                        ],
                print = template_node.join("");

            return print;

    });

    tip2.attr( 'class', 'theTip' )
        .html( function ( d ) {
            var template_link =   [
                            "<span class='titleTip'>", 
                            d.sourceName.toUpperCase(), 
                            " → ", 
                            d.targetName, 
                            "</span>",
                            "<div class='drawline'></div>",
                            "<span class='totalTip'><strong>Total: </strong>", 
                            format(d.value),
                            "</span><br>",
                            "<span class='totalTip inRed'>",
                            floorFigure(d.value/grandTotal*100, 3),
                            "%",
                            "<span class='budget'> of Budget </span>",
                            "</span>"
                        ],
                print = template_link.join("");

            return print;
                
    });





    //---------------- links -----------------------------------------------------



    pS = {

        link_stroke_width : function ( d ) {
            return Math.max( 2, d.dy );
        },

        link_stroke_width_hover : function( d ) {
            return Math.max( 4, d.dy );
        },

        link_color : function (d, i) {
            if ( d.value > 3000000 ) {
                return d.theColor;
            } else {
                return d3.rgb( d.theColor ).darker( 2.5 );
            }
        }
    };


    pS.link_init_style =    { 
                                "fill": "none", 
                                "stroke-opacity": 0.15, 
                                "stroke-width": pS.link_stroke_width, 
                                "stroke": pS.link_color
                            };

    pS.link_reset_style_1 = { 
                                "stroke-opacity": 0.15
                            };

    pS.link_reset_style_2 = { 
                                "stroke-width": pS.link_stroke_width, 
                                "stroke": pS.link_color 
                            }

    pS.link_hovered =       {
                                "stroke-opacity": 0.6,
                                "stroke-width": pS.link_stroke_width_hover
                            };

    pS.link_not_hovered =   {
                                "stroke-width": pS.link_stroke_width, 
                                "stroke-opacity": 0.05
                            };

    pS.link_from_node =     {
                                "stroke-opacity": 0.5,
                                "stroke-width": pS.link_stroke_width
                            };

    pS.link_not_from_node = {
                                "stroke-opacity": 0,
                                "stroke-width": pS.link_stroke_width
                            };


    function BudgetLinks() {
      
        var theLink = {};

        theLink = chart.selectAll("#chart")
                .data( sankey.links() )
            .enter().append( "path" )
                .attr( "class", "link" )
                .attr( "d", sankey.link() )
                .style( pS.link_init_style )
                .sort( function( a, b ) { return b.dy - a.dy; } );
                
        return theLink;

    }




    graph_links = Object.create( BudgetLinks() );

    allLinks = d3.selectAll( "path" );

    graph_links
        .on( "mouseover", mouseover )
        .on( 'mouseout', mouseout )
        .on( 'mouseenter', tip2.show )
        .on( 'mouseleave', tip2.hide )
        .on( "touchstart", tip2.show );
          





      //---------------- nodes --------------------------------------------------------



      // create the base code that forms off of the rects
    function BudgetNodes() {

        var theNode = {};

        theNode = chart.selectAll("#chart")
                .data(obj.eachNode)
            .enter().append( "rect" )
                // .attr( "class", "node" )
                .attr( "transform", function ( d ) { return "translate(" + d.x + "," + d.y + ")"; });

        return theNode;

    }




     // ***** all parts of the graph_rects creation ****** (rect)

    graph_rects = Object.create( BudgetNodes() );

    function node_fill_color ( d, i ) { return d.theColor; }

    function node_stroke_color ( d ) { return d.strokeColor; }


    rS = {}; // rectangle styles

    var test = new Array(1);

    var node_stroke_width = function ( d ) {

            var value = parseFloat(d.dy) * 100,
                num = ( value < 270 ) ? "6px" : "2px";

            return num;
        }



    // rS.px1 = function () { 
    //         var arr = [ 1, "px"]; 
    //         var print = arr.join(""); 
    //         return print;
    //     }
        // main styles
    test[0] = {
                        "stroke-opacity": 1.0,
                        "fill-opacity": 0.8,
                        "shape-rendering": "crispEdges",
                        "overflow": "visible",
                        "stroke-width": "1px",
                        "z-index": 1000
                      };

    rS.node_hovered =  {
                      "fill-opacity": 0.7,
                      "stroke-width": node_stroke_width,
                      "z-index": -100
                    };

    rS.node_not_hovered =  {
                            "stroke-width": "1px",
                            "stroke-opacity": 1.0,
                            "fill-opacity": 1e-6
                        };

    rS.node_from_link =  {
                        "stroke-width": 1 + "px",
                        "stroke-opacity": 1.0,
                        "fill-opacity": 0.6
                      };


    rS.node_not_from_link = {
                            "stroke-opacity": 0.6,
                            "stroke-width": "1px",
                            "fill-opacity": 1e-6
                          };

    rS.node_return = {
                    "fill-opacity": 0.8,
                    "stroke-opacity": 1.0,
                    "stroke-width": "1px"
                  };


      //make the nodes
    graph_rects
        .attr( "class", "node" )
        .attr( "height", function ( d ) { return d.dy; } )
        .attr( "width", sankey.nodeWidth() )
        .style( "fill", node_fill_color )
        .style( "stroke", node_stroke_color )
        .style( test[0] );

    graph_rects.on( "mouseover", mouseover )
        .on( "mouseout", mouseout )
        .on( "mouseenter", tip.show )
        .on( "mouseleave" , tip.hide )
        .on( "touchstart", tip.show );

    pick_all_rect = d3.selectAll( "rect" );


    
 





  //---------------- labels --------------------------------------------------------
      
      // ***** all parts of the graph_labels creation ****** (text)

    function Labels() {

        var theLabel = {};

        theLabel = chart.append( "g" ).selectAll( "text" )
                .data( sankey.nodes() )
            .enter().append( "g" )
                .attr( "class", "words" )
                .attr( "transform", function ( d ) { return "translate(" + d.x + "," + d.y + ")"; } )

        return theLabel;

    }


    graph_labels = Object.create( Labels() );


    lS = {}; // label styles

    lS.font_size = function ( d ) {
            if ( d.dy > 50 ) { 
                return '15px';
            } else if ( d.dy <= 1.5 ) {
                return '0px';
            } else if ( d.dy <= 3 ) {
                return '8px';
            } else if ( d.dy <= 4 ) {
                return '9.5px';
            } else if ( d.dy <= 8 ) {
                return '11px';
            } else if ( d.dy <= 20 ) {
                return '12.5px';
            } else {
                return '13px';
            }
        }

    lS.font_size_hover_group = function ( d ) {
            if ( d.dy > 50 ) { 
                return '17px';
            } else if ( d.dy <= 1.5 ) {
                return '9px';
            } else if ( d.dy <= 3 ) {
                return '10px';
            } else if ( d.dy <= 4 ) {
                return '10px';
            } else if ( d.dy <= 8 ) {
                return '13px';
            } else if ( d.dy <= 20 ) {
                return '14px';
            } else {
                return '16px';
            }
        }

    lS.font_color = function ( d ) {
          ////console.log("new d.dy",d.dy);
            if ( d.dy > 50 ) { 
                return "#000010";
            } else if ( d.dy <= 1.5 ) {
                return "#9AADB2"; //B7CDD4 B4CAD1 9AADB2
            } else if ( d.dy <= 3 ) {
                return "#343F47";
            } else if ( d.dy <= 8 ) {
                return "#252D33";
            } else if ( d.dy <= 20 ) {
                return "#14191C";
            } else {
                return "#111417";
            }
        }

    lS.font_opacity = function ( d ) { 
            if ( d.dy < 1.5 ) { 
                return 0 ; 
            } 
        }

    lS.label_style =   {
                            "font-size": lS.font_size,
                            "fill": "#000010",
                            "pointer-events": "none",
                            "z-index": 10,
                            "text-shadow": 0 + "" +1 + "px " + 0 + " #fff"
                        };
    lS.filterWidth =  function ( d ) { return d.x < width / 2; }


    graph_labels.append("text")
        .attr("class", "labels")
        .attr( "x", -6 )
        .attr( "y", function ( d ) { if ( d.dy > 1.5 ) { return d.dy / 2; } else { return 4 ; } })
        .attr( "dy", ".35em" )
        .attr( "text-anchor", "end" )
        .attr( "transform", null )
        .text( function ( d ) { return d.name; } )
        .style( lS.label_style )
        .filter( lS.filterWidth ) //seem to affect what side text is shown
        .attr( "x", 6 + sankey.nodeWidth() )
        .attr( "text-anchor", "start" );

    all_Lables = d3.selectAll( "text" );



    graph_headers = Object.create( Labels() );

    var catagory = ["Revenue Source", "Fund", "Agency"];

    graph_headers.append( "text" )
        .attr( "x", sankey.nodeWidth() )
        .attr( "text-anchor", "end" )
        .attr( "transform", null )
        .text( function ( d, i ) { if ( d.y === 0 ) { return catagory.shift(); } } )
        .attr( "y", function ( d ) { return d.y - 1 + "em" ; } )
        .style( "font-size", 24 + "px" )
        .style( "font-weight", 500)
        .filter( function( d ) { return d.x < width / 1.2; } ) 
        .attr( "x", 0 )
        .attr( "text-anchor", "start" );

    var graph_values = Object.create( Labels() );

    var column_totals = new Array()

    column_totals.push( sankeyTotal ); column_totals.push( middleTotal ); column_totals.push( rightTotal );

    //console.log(column_totals);

    graph_values.append( "text" )
        .attr( "x", sankey.nodeWidth() )
        .attr( "text-anchor", "end" )
        .attr( "transform", null )
        .text( function ( d, i ) { if ( d.y === 0 ) { return format( column_totals.shift() ); } } )
        .attr( "y", function ( d ) { return d.y - .4 + "em" ; } )
        .style( "font-size", 16 + "px" )
        .style( "font-weight", 100)
        .filter( function( d ) { return d.x < width / 1.2; } ) 
        .attr( "x", 0 )
        .attr( "text-anchor", "start" );


//*************************** transitions ************************************

    // link transitions *******************************************************


    function durationHelp( obj ) { // function affects the duration of transition for smaller links {thin links change fast}
            var dyValue = obj.dy * 100,
                timer = ( dyValue < 270 ) ? 70 : 400;

            return timer
        }


    function link_over( its, data, other_links, filtered_Nodes ) {
  
        var currentLink = data,
            targetLink = its,
            allNodes = d3.selectAll("rect"),
            locationSource = currentLink.sourceName,
            locationTarget = currentLink.targetName;
      
        targetLink.transition().duration( durationHelp( currentLink ))
            .style( pS.link_hovered );

        d3.timer.flush();

        other_links = d3.selectAll( "path" ).filter( function ( d ) { return d !== currentLink; } );
      
        other_links.transition().delay( 650 ).duration( 200 )
            .style( pS.link_not_hovered );

        filtered_Nodes = allNodes.filter( function ( d ) { // returns true or false making node lighten.  I need a better method
            var result1 = d.name === locationSource,
                result2 = d.name === locationTarget;
            if ( result1 ) { 
                return false;
            } else if ( result2 ) {
                return false;
            } else {
                return true;
            }
        });

        filtered_Nodes.transition( "node" )
                .duration( 750 )
            .style( rS.node_not_from_link );

        label_over_with_link( data );

    }


    function link_out( its ) {
        
        var allLink = d3.selectAll( "path" ),
            allNodes = d3.selectAll( "rect" ),
            targetLink = its,
            other_links;
            //value;

        targetLink.transition()
            .style( pS.link_reset_style_1 )
                .duration(1500)
            .style( pS.link_reset_style_2 );

        d3.timer.flush();

        other_links = allLink.filter( function(d) { return d !== its.datum(); } );

        other_links.transition().duration( 900 )
            .style( pS.link_init_style );

        allNodes.transition( "node"  ).duration( 1500 )
            .style( test[0] );
        
        //value = current_info.getState()

        label_out_link();

    }

    // node transitions *******************************************************

   function later( data, locationName, other_nodes, filtered_Links, not_filtered_links ) {


        // allLinks = d3.selectAll( "path" );

        not_filtered_links = allLinks.filter( function ( d ) {
            var result1 = d.sourceName === locationName,
                result2 = d.targetName === locationName;
            if (!result1) { 
                return true;
            } else if (!result2) {
                return true;
            } else {
                return false;
                }
        });

        not_filtered_links.transition().delay( 150 ).duration( 850 ).style( pS.link_not_from_node );

        filtered_Links = allLinks.filter( function ( d ) {
            var result1 = d.sourceName === locationName,
                result2 = d.targetName === locationName;
            if (result1) { 
                return true;
            } else if (result2) {
                return true;
            } else {
                return false;
                }
        });

        filtered_Links.transition().delay( 110 ).duration( 850 ).style( pS.link_from_node );

        other_nodes = pick_all_rect.filter( function ( d ) { // loops through and returns true when not compValue
            return d !== data; 
        });

        other_nodes.transition( "node" ).delay( 300 ).duration( 800 ).style( rS.node_not_hovered );

    }
    

    function node_over( its, data, other_nodes, filtered_Links, not_filtered_links ) {

        var locationName = data.name,
            //now = Date.now(),
            //value = current_info.getState(),
            //past = value.In,
            //pastOut = value.Out,
            //elapsed = now - past,
            i = 0;

        //current_info.timeSet( time_IN, now );
        //console.log("past pastout",pastOut - past);

        its.transition( "node" ).duration( 2 ).style( rS.node_hovered );

        d3.timer.flush();

        later( data, locationName, other_nodes, filtered_Links, not_filtered_links );


        label_over_with_node( data );
    }


    function node_out( its ) {

        var allLinks = d3.selectAll( "path" ),
            //now = Date.now(),
            othter_nodes,
            //value = current_info.getState(),
            //first = value.In,
            //elapsed = now - first,
            i = 0;


        its.transition( "node" ).duration( 250 ).style( rS.node_return );

        //all_Lables.interrupt("text");

        d3.timer.flush();

        allLinks.transition().delay( 110 ).duration( 940 ).style( pS.link_init_style );

        othter_nodes = pick_all_rect.filter( function ( d ) { return d !== its.datum(); });

        othter_nodes.transition( "node" ).delay( 500 ).style( rS.node_return );

        //current_info.timeSet( time_OUT, now );

        label_out_node();

    }
    
    // label transitions *******************************************************

    function label_over_with_link( data ) {

        //var data = its.datum(),
        var source_num = data.st,
            target_num = data.tt,
            keep_label = [].concat( source_num, target_num ).sort( numSort ),
            j = 0,
            m = 0,
            show_label = {},
            hide_label = {},

            hide =  function (d) {
                            var t = {};

                                if ( d.num === keep_label[j] ) {
                                    j++;
                                } else {
                                    t = d;
                                    return t;
                                }
                        },

            show =  function (d) {
                                var t = {};

                                if ( d.num === keep_label[m] ) {
                                    m++;
                                    return d;
                                } else {
                                    t = d;
                                }
                        };


        show_label = all_Lables.filter( show );

        //console.log( "show_label",all_Lables );
    
        show_label.transition( "text" ).delay( 900 ).style({ "font-size": "17px",  "fill": "#000010", "pointer-events": "none" })
            .attr( "x", -6 )
            .attr( "text-anchor", "end" )
            .attr( "transform", null )
            .filter( lS.filterWidth ) //seem to affect what side text is shown
            .attr( "x", 6 + sankey.nodeWidth() )
            .attr({ "text-anchor": "start", "pointer-events": "none" });

        hide_label = all_Lables.filter( hide );

        hide_label.transition( "text" ).delay( 900 ).style({ "fill-opacity": 0, "pointer-events": "none" });

    }

    function calcDistanceAndSplit( list2D, value ) {

        var lastY = 0,
            list = [],
            count = 0;

        list2D.forEach( function ( obj) {
            obj.forEach( function ( innerObj ) {
                //console.log( innerObj.y - lastY < value );
                if ( ( innerObj.y - lastY < value ) && ( innerObj.y - lastY > 0 ) ) {
                    if ( isEven( count ) ) {
                        list.push( innerObj.num );
                        count++;
                    } else {
                        count = 0;
                    }
                } else {
                    count = 0;
                }
                lastY = innerObj.y
            });
        });

        return list;

    }
    
    function label_over_with_node( data ) {

        var current_num = data.num,
            source_num = data.sTag,
            target_num = data.tTag,
            keep_label = [].concat( current_num, source_num, target_num ).sort( numSort ),
            len = keep_label.length,
            size = (len > 7) ? lS.font_size_hover_group : "17px",
            j = 0,
            l = 0,
            m = 0,
            dataToFilter = [],
            show_label = {},
            hide_label = {},

            hide =  function (d) {
                            
                        var t = {};

                        if ( d.num === keep_label[j] ) {
                            j++;
                        } else {
                            t = d;
                            return t;
                        }
                    },

            show =  function (d) {
                        
                        var t = {};

                        if ( d.num === keep_label[m] ) {
                            m++;
                            t = d;
                            dataToFilter.push( t );
                            return t;
                        } 
                    };

        hide_label = all_Lables.filter( hide );

        hide_label.transition("text").delay( 1100 ).style({ "fill-opacity": 0, "pointer-events": "none" });


        show_label = all_Lables.filter( show );

        if ( len < 12 ) {

            show_label.transition( "text" ).delay( 1100 )
                .style({ "font-size": size,  "fill": "#000010", "pointer-events": "none" });

        } else {

            var sortedNumberList = groupedAndSort( dataToFilter, "x", "y", "up" ),

                sendOpposite = calcDistanceAndSplit( sortedNumberList, 10 ).sort( numSort ),

                otherway = {},

                change = function ( obj ) {

                            var g = {};

                            if ( obj.num === sendOpposite[l] ) {
                                l++;
                                g = obj;
                                return g;
                            }
                        };


            otherway = show_label.filter( change );

            show_label.transition("text").delay( 1100 )
                .style({ "font-size": size,  "fill": "#000010", "pointer-events": "none" });

            if ( data.x > width / 2 || data.x === 0 ) {

                otherway.transition("text").delay( 1100 )
                    .attr( "y", function ( d ) { return d.dy / 2; } )
                    .attr({ "x": -6, "text-anchor": "end" })
                    .style({ "font-size": size,  "fill": "#000010", "pointer-events": "none" });

            } else {

                otherway.transition("text").delay( 1100 )
                    .attr( "y", function ( d ) { return d.dy / 2; } )
                    .attr({ "x": 6 + sankey.nodeWidth(), "text-anchor": "start" })
                    .style({ "font-size": size,  "fill": "#000010", "pointer-events": "none" });

            }
        }
    }


    function label_out_link() {
        
        all_Lables
            .transition( "text" ).delay( 200 ).style({ "fill-opacity": 1, "font-size": lS.font_size, "fill": lS.font_color, "pointer-events": "none" })
                .attr( "x", -6 )
                .attr( "text-anchor", "end" )
                .attr( "transform", null )
                .filter( lS.filterWidth ) 
                .attr( "x", 6 + sankey.nodeWidth() )
                .attr( "text-anchor", "start" );

    }


    function label_out_node() {

        all_Lables.transition( "text" ).delay( 200 ).style({ "fill-opacity": 1, "font-size": lS.font_size, "fill": lS.font_color, "pointer-events": "none" })
            .transition()
                .attr( "x", -6 )
                .attr( "text-anchor", "end" )
                .attr( "transform", null )
                .filter( lS.filterWidth ) 
                .attr( "x", 6 + sankey.nodeWidth() )
                .attr( "text-anchor", "start" );

    }






        



    //********************** controller ***************************
    //
    //
    //
    //************************************************************



    function focus_on(its) {
        var data = its.datum();

        if ( data.type !== "link" ) {
            node_over( its, data );
        }
        else {
            link_over( its, data );
        }

    }

    function focus_out( its ) {

        if ( its.datum().type !== "link" ) {
            node_out( its );
        }
        else {
            link_out( its );
        }

    }


    function mouseover() {

        var target = d3.select( this );

        focus_on( target );

        //current_info.report_in( target );


    }

    function mouseout() {

        var target = d3.select( this );

        focus_out( target );

    }


    chart.call( theTip );

})();
