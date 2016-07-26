"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DonutComponent = (function () {
    function DonutComponent() {
    }
    DonutComponent.prototype.ngOnInit = function () {
        var svg = d3.select(".donut")
            .append("svg")
            .append("g");
        svg.append("g")
            .attr("class", "slices");
        svg.append("g")
            .attr("class", "labels");
        svg.append("g")
            .attr("class", "lines");
        var width = 960, height = 450, radius = Math.min(width, height) / 2;
        var pie = d3.pie().sort(null).value(function (result) {
            return result.value;
        });
        var arc = d3.arc()
            .outerRadius(radius * 0.8)
            .innerRadius(radius * 0.4);
        var outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);
        svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var key = function (d) { return d.data.label; };
        var color = d3.scaleOrdinal()
            .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        function randomData() {
            var labels = color.domain();
            return labels.map(function (label) {
                return { label: label, value: Math.random() };
            });
        }
        change(randomData());
        d3.select(".randomize")
            .on("click", function () {
            change(randomData());
        });
        function change(data) {
            /* ------- PIE SLICES -------*/
            var slice = svg.select(".slices").selectAll("path.slice")
                .data(pie(data), key);
            slice.enter()
                .insert("path")
                .style("fill", function (d) { return color(d.data.label); })
                .attr("class", "slice");
            slice
                .transition().duration(1000)
                .attrTween("d", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    return arc(interpolate(t));
                };
            });
            slice.exit()
                .remove();
            /* ------- TEXT LABELS -------*/
            var text = svg.select(".labels").selectAll("text")
                .data(pie(data), key);
            text.enter()
                .append("text")
                .attr("dy", ".35em")
                .text(function (d) {
                return d.data.label;
            });
            function midAngle(d) {
                return d.startAngle + (d.endAngle - d.startAngle) / 2;
            }
            text.transition().duration(1000)
                .attrTween("transform", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    var d2 = interpolate(t);
                    var pos = outerArc.centroid(d2);
                    pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                    return "translate(" + pos + ")";
                };
            })
                .styleTween("text-anchor", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    var d2 = interpolate(t);
                    return midAngle(d2) < Math.PI ? "start" : "end";
                };
            });
            text.exit()
                .remove();
            /* ------- SLICE TO TEXT POLYLINES -------*/
            var polyline = svg.select(".lines").selectAll("polyline")
                .data(pie(data), key);
            polyline.enter()
                .append("polyline");
            polyline.transition().duration(1000)
                .attrTween("points", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    var d2 = interpolate(t);
                    var pos = outerArc.centroid(d2);
                    pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                    return [arc.centroid(d2), outerArc.centroid(d2), pos];
                };
            });
            polyline.exit()
                .remove();
        }
        ;
        change(randomData());
    };
    DonutComponent = __decorate([
        core_1.Component({
            selector: 'donut-cmp',
            templateUrl: 'graphs/templates/donut.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DonutComponent);
    return DonutComponent;
}());
exports.DonutComponent = DonutComponent;