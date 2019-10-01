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

local c;
for i, cancion in ipairs(canciones) do
    local valor = redis.call("HGET","TRACK:"..cancion, "name");
    if (valor == "We are the champions") then
    --  return redis.call("ZRANK","TRACK"..cancion);
    end
end

redis.call("ZREMRANGEBYSCORE","TRACK",0,5000000);
return redis.call("zrevrange","TRACK", 0,-1,"WITHSCORES");