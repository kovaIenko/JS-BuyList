/**
 * Created by Ruslan on 21.01.2017.
 */


$(function () {

    var ITEM_TEMPLATE = $(".unvisible").html();
    var LIST = $(".products");
    var ITEM_BASKET = $(".basket_unvisible").html();
    var LIST_BASKET = $(".all_products");
    var NOT_BOUGHT = $(".product_bought").html();
    var HAS_BOUGHT = $('.has_bought');

    addItem('Помідори');
    addItem('Печиво');
    addItem('Сир');

    var called = $('.name');
    called.focus();
    $(".confirm").click(function () {
        var read = called.val();
        if (read != '')
            addItem(read);
        else
            alert("                                      You have write name of product!!!");
        called.val("");
        called.focus();
    });

    $('.name').keypress(function (e) {
        if (e.which == 13) {
            $(".confirm").click();
        }
    });


    function addItem(title) {

        var node = $(ITEM_TEMPLATE);
        node.find(".span_name").text(title);
        var item = $(NOT_BOUGHT);   //шаблон не куплено
        var temp_node = node.find('.product_div');
        var new_basket_node = $(ITEM_BASKET);
        var has_bought = $(HAS_BOUGHT);  //
        var node_b = $(ITEM_BASKET);
        node_b.find(".basket_name").text(title);
        node_b.fadeIn(1000);
        LIST_BASKET.append(node_b);
        node.fadeIn(1000);

        node.find('.delete_product').click(function () {
            node.slideToggle(function () {
                node.remove();
            });  // everything
            node_b.fadeOut(function () {
                node.remove();
            });
            called.focus();
        });


        var name = node.find(".span_name");
        var changed = title;

        name.click(function () {
            var save_name = name.text();
            name.css("display", 'none');
            var will_name = node.find(".change_name");
            will_name.css("display", 'block');
            will_name.val(save_name);
            will_name.focus();

            node.find(".change_name").keyup(function () {
                changed = will_name.val();
                node_b.find(".basket_name").text(changed);
                new_basket_node.find(".basket_name").text(changed);
                item.find('.span_name').text(changed);
                name.text(changed);
            });


            will_name.focusout(function () {
                will_name.css("display", 'none');
                name.css("display", 'block');
            });
        });


        var counter = node.find('.count_select').text();
        var counter_basket = node_b.find('.counter').text();
        var plus = node.find('.plus');
        var minus = node.find('.minus');
        var res_ = node.find('.count_select');
        var res_basket = node_b.find('.counter');
        node.find('.plus').click(function () {
            counter = parseInt(counter);
            counter_basket = parseInt(counter_basket);
            if (counter > 0) {
                minus.css('disabled', false);
                minus.css('opacity', 1);
            }
            counter++;
            counter_basket++;
            res_.css('display','none');
            res_basket.css('display','none');
            res_.text(counter);
            res_basket.text(counter_basket);
            res_.fadeIn(300);
            res_basket.fadeIn(80);
        });



        minus.click(function () {
            if (parseInt(counter) <= 2) {
                minus.css('disabled', true);
                minus.css('opacity', 0.5);
            }
            if (parseInt(counter) > 1) {
                counter--;
                counter_basket--;
                res_.css('display','none');
                res_basket.css('display','none');
                res_.text(counter);
                res_basket.text(counter_basket);
                res_.fadeIn(300);
                res_basket.fadeIn(80);


            }
        });

        var push_bought = node.find('.bought');
        var push_not_bought = item.find('.not_bought_');


        push_bought.click(function () {
            var y = (temp_node.find('.count_select').text());
            var name_left = new_basket_node.find(".basket_name");
            name_left.text(changed);
            name_left.css('text-decoration', 'line-through');
            new_basket_node.find(".counter").text(y);
            item.fadeIn(1000);
            new_basket_node.fadeIn(1000);
            new_basket_node.css("display", "inline-block");
            node_b.css("display", "none");
            temp_node.css('display', 'none');
            item.css('display', 'block');
            item.find(".count_select").text(y);
            item.find('.span_name').text(changed);

            has_bought.append(new_basket_node);

            node.append(item);

        });

        push_not_bought.click(function () {
            temp_node.fadeIn(1000, function () {
                temp_node.css('display', 'block');
            });
            item.css('display', 'none');
            new_basket_node.css('display', 'none');
            node_b.fadeIn(1000);
            node_b.css("display", "inline-block");
        });

        LIST.append(node);
    }
});