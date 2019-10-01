local intermedio =redis.call("zrevrangebyscore","TRACK",8000000,10000000);

local canciones = redis.call("zrevrange","TRACK", 0,1);
local test = {}
for i, cancion in ipairs(canciones) do
    local c = redis.call("hget","TRACK:"..cancion,"name");
    local score = redis.call("zscore","TRACK",cancion);
    table.insert(test,{c, score});
end

canciones = redis.call("zrevrange","TRACK", 0,-1);
test = {}
for i, cancion in ipairs(canciones) do
    local c = redis.call("hget","TRACK:"..cancion,"name");
    local score = redis.call("zscore","TRACK",cancion);
    table.insert(test,{c, score});
end

return test;