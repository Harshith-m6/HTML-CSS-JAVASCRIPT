let Counter ={
    count:0,
    incr(){
        this.count++;
        return this;
    }
    ,
    decr(){
        this.count--;
        return this;
    }
    ,
    getCount(){
        console.log(this.count);
        return this;
    }
}

Counter.incr().getCount().decr().getCount()
